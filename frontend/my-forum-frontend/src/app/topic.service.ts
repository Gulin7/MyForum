import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private serverUrl = 'http://localhost:8080/api/topics';

  constructor(private http: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.serverUrl}`);
  }
  getTopicByTitle(title: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.serverUrl}/title?title=${title}`);
  }

  addTopic(topic: Topic): Observable<Topic> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Topic>(`${this.serverUrl}`, topic, { headers });
  }
}
