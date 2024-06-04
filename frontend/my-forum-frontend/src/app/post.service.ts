import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private serverUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.serverUrl}`);
  }

  getPostByTitle(title: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.serverUrl}/topic/${title}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.serverUrl}`, post);
  }

  deletePost(username: String, topciTitle: string): Observable<void> {
    return this.http.post<void>(`${this.serverUrl}`, { username, topciTitle });
  }
}
