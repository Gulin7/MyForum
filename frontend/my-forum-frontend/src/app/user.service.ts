import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private serverUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}`);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.serverUrl}`, user);
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.serverUrl}/login`, user);
  }
}
