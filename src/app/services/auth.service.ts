import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl = "http://localhost:5000/api/";
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = {
      "email": email,
      "password": password
    }
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}login`, body, { headers: this.header, observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  register(user: User): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.baseUrl}register`, user, { headers: this.header, observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('an error occured: ', httpError.error.message);
    } else {
      console.error(`
        Backend returned code ${httpError.status}
        body was: ${httpError.error}
      `)
    }
    return throwError(() => new Error('something really bad happened'));
  }

}
