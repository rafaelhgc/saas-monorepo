import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, of, switchMap, throwError } from 'rxjs';
import { Post } from '../modes/post.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  http = inject(HttpClient);
  posts = [
    {
      title: 'Markdown syntax guide',
      coverImage: 'lorem-ipsum.jpg',
      createdAt: '2024-11-13T00:16:50.676Z',
      slug: 'lorem-ipsum',
    },
  ] as Post[];

  readAll() {
    return of(this.posts);
  }

  details(slug: string) {
    const post = this.posts.find((p) => p.slug === slug);

    if (!post) return throwError(() => new Error('not found'));

    return this.http.get(`/posts/${slug}.md`, { responseType: 'text' }).pipe(
      map(
        (content) =>
          ({
            ...post,
            content,
          } as Post)
      )
    );
  }
}
