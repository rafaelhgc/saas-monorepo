import { Component, inject, OnInit, SecurityContext } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../modes/post.model';
import { MarkdownPipe } from '../pipes/markdown.pipe';

type PostState = { loading?: boolean; failure?: boolean; data?: Post };

@Component({
  standalone: true,
  imports: [CommonModule, MarkdownPipe],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  providers: [BlogService],
})
export class BlogPostComponent implements OnInit {
  blogService = inject(BlogService);
  post$ = new BehaviorSubject<PostState>({ loading: true });
  route = inject(ActivatedRoute);

  get slug$() {
    return this.route.params.pipe(map(({ slug }) => slug));
  }

  ngOnInit() {
    this.slug$.pipe(switchMap((slug) => this.blogService.details(slug).pipe(tap(console.log)))).subscribe({
      next: (post) => this.post$.next({ data: post }),
      error: () => this.post$.next({ failure: true }),
    });
  }
}
