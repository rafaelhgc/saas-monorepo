import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BehaviorSubject, filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../modes/post.model';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { BlogService } from '../services/blog.service';
import { AnalyticsService } from '@saas/commons/services';

type PostState = { loading?: boolean; failure?: boolean; data?: Post };

@Component({
  standalone: true,
  imports: [CommonModule, MarkdownPipe, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  providers: [BlogService],
})
export class BlogPostComponent implements OnInit, OnDestroy {
  blogService = inject(BlogService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  title = inject(Title);
  meta = inject(Meta);
  slug = '';
  post$ = new BehaviorSubject<PostState>({ loading: true });
  onDestroy$ = new Subject<void>();
  analytics = inject(AnalyticsService);

  get slug$() {
    return this.route.params.pipe(
      map(({ slug }) => slug),
      tap((slug) => (this.slug = slug))
    );
  }

  ngOnInit() {
    this.post$
      .pipe(
        takeUntil(this.onDestroy$),
        filter((post) => !!post.data)
      )
      .subscribe({
        next: (post) => {
          this.title.setTitle(`${post.data?.title} | agendaonline.me`);

          this.meta.addTags([
            { name: 'description', content: `${post.data?.description}` },
            { name: 'keywords', content: `${post.data?.tags}` },
            { name: 'author', content: 'agendaonline' },
            { name: 'og:title', content: `${post.data?.title}` },
            { name: 'og:description', content: `${post.data?.description}` },
            { name: 'og:image', content: `https://agendaonline.me/images/${post.data?.coverImage}` },
            { name: 'og:url', content: `https://agendaonline.me/blog/${post.data?.slug}` },
            { name: 'og:type', content: 'article' },
            { name: 'og:site_name', content: 'agendaonline.me' },
            { name: 'og:locale', content: 'pt_BR' }
          ]);

        },
      });

    this.slug$
      .pipe(
        takeUntil(this.onDestroy$),
        switchMap((slug) => this.blogService.details(slug))
      )
      .subscribe({
        next: (post) => this.post$.next({ data: post }),
        error: () => this.router.navigate(['/404'], { queryParams: { slug: this.slug } }),
      });

      this.analytics.view('blog-post', {
        'slug': this.slug
      });

  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }

  sendClick(slug: string) {
    this.analytics.click('blog-related', {
      related: this.slug, 
      to: slug
    })
  }
}
