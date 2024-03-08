import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class MemberService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/travelweb';
  }

  getAllMembers(): Observable<User> {
    const url = `${this.usersUrl}/members`;
    return this.http.get<User>(url);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/members/${id}`);
  }
}
