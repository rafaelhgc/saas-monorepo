import { Component, inject, OnInit, SecurityContext } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../modes/post.model';
import { MarkdownPipe } from '../pipes/markdown.pipe';

type PostState = { loading?: boolean; failure?: boolean; data?: Post };

@Component({
  standalone: true,
  imports: [CommonModule, MarkdownPipe, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  providers: [BlogService],
})
export class BlogPostComponent implements OnInit {
  blogService = inject(BlogService);
  post$ = new BehaviorSubject<PostState>({ loading: true });
  route = inject(ActivatedRoute);
  router = inject(Router);
  slug = '';

  get slug$() {
    return this.route.params.pipe(
      map(({ slug }) => slug),
      tap((slug) => (this.slug = slug))
    );
  }

  ngOnInit() {
    this.slug$.pipe(switchMap((slug) => this.blogService.details(slug))).subscribe({
      next: (post) => this.post$.next({ data: post }),
      error: () => this.router.navigate(['/404'], { queryParams: { slug: this.slug } }),
    });
  }
}
