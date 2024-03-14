import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class MemberService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/travelweb/members';
  }

  getAllMembers(): Observable<User> {
    const url = `${this.apiUrl}/members`;
    return this.http.get<User>(url);
  }

  getById(memberId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${memberId}`);
  }
}
