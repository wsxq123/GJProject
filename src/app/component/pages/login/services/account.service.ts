import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../../environment/environment';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(memberAccount: string, memberPassword: string): Observable<boolean> {
    return this.http
      .post<User>(`${environment.appUrl}authenticate`, {
        memberAccount,
        memberPassword,
      })
      .pipe(
        map((user: User) => {
          // Handle successful login, if needed
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        }),
        catchError((error: Error) => {
          // Handle login error
          console.error('Login error:', error);
          throw error; // Rethrow the error to be caught by the component
        })
      );
  }

  //return this.http;
  //.post<User>(`${environment.appUrl}/authenticate`, {
  //memberAccount,
  //memberPassword,
  //}).pipe(
  //map((user) => {
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  //localStorage.setItem('user', JSON.stringify(user));
  //console.this.userSubject.next(user);
  //return user;
  //})
  //);

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/home']);
  }

  register(user: User) {
    return this.http.post(`${environment.appUrl}/register`, user);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.appUrl}/members`);
  }

  getuserrole() {
    return this.http.get(`${environment.appUrl}/users/role`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateuser(id: any, inputdata: any) {
    return this.http.put(`${environment.appUrl}` + '/' + id, inputdata);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update(id: string, params: any) {
    return this.http.put(`${environment.appUrl}/users/${id}`, params).pipe(
      map((x) => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue?.memberId) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      })
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.appUrl}/users/${id}`).pipe(
      map((x) => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue?.memberId) {
          this.logout();
        }
        return x;
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forgetPassword(postData: any) {
    //console.log(`Password reset email sent to ${email}`);
    return this.http.post(`${environment.appUrl}/forgetpassword`, postData, {
      observe: 'response',
    });
  }

  resetPassword(password: string, confirmPassword: string) {
    return this.http.post(`${environment.appUrl}/resetpassword`, {
      password,
      confirmPassword,
    });
  }
}
