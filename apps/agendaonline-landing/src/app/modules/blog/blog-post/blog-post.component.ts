import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../modes/post.model';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { BlogService } from '../services/blog.service';

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
  slug = '';
  post$ = new BehaviorSubject<PostState>({ loading: true });
  onDestroy$ = new Subject<void>();

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
          this.title.setTitle(`${this.title.getTitle()} | ${post.data?.title}`);
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
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }
}
