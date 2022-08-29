import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  carUrl = `https://api.api-ninjas.com/v1/cars?limit=2&model=`;
  baseUrl = `http://localhost:5000/`
  sessionToken = sessionStorage.getItem('rolodex-token')
  
  httpOptionsRent = {
    headers: new HttpHeaders({'Content-Type' : 'application/json',
    'token' : `${this.sessionToken}`})
  }
  
  httpOptionsApi = {
    headers: new HttpHeaders({'Content-Type' : 'application/json', 
    'X-Api-Key' : 'HuAl1CsHr+S76Osn/6SZXA==7TtgUCobh3JUygmJ'})    
    // ({'X-Api-Key' : 'HuAl1CsHr+S76Osn/6SZXA==7TtgUCobh3JUygmJ'})
  }

  constructor(private http: HttpClient) { }

  sendRental(rentalInfo): Observable<any> {
    this.http.post<any>(`${this.baseUrl}rental`, rentalInfo, this.httpOptionsRent).subscribe(data => { data });
    return null;
  }

  getSedanList(): Observable<any> {
    return this.http.get<any>(`${this.carUrl}passat`, this.httpOptionsApi)
    .pipe(catchError(this.handleError))
  }

  getSuvList(): Observable<any> {
    return this.http.get<any>(`${this.carUrl}navajo`, this.httpOptionsApi)
    .pipe(catchError(this.handleError))
  }

  getTruckList(): Observable<any> {
    return this.http.get<any>(`${this.carUrl}f150+pickup+2wd`, this.httpOptionsApi)
    .pipe(catchError(this.handleError))
  }

  getVanList(): Observable<any> {
    return this.http.get<any>(`${this.carUrl}vanagon+2wd`, this.httpOptionsApi)
    .pipe(catchError(this.handleError))
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

