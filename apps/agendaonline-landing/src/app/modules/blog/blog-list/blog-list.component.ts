import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BlogService } from '../services/blog.service';

type PostsState = { loading?: boolean; failure?: boolean; data?: any[] };

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: 'blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [BlogService],
})
export class BlogListComponent implements OnInit {
  blogService = inject(BlogService);
  posts$ = new BehaviorSubject<PostsState>({ loading: true });

  ngOnInit() {
    return this.blogService.readAll().subscribe({
      next: (posts) => this.posts$.next({ data: posts }),
      error: () => this.posts$.next({ failure: true }),
    });
  }
}
