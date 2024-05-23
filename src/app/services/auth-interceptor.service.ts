import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private router: Router, public authservice: AuthService) { }
  decodedToken = '';
  encodedToken = '';
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // als Antwort erhalten wir ein Observable
    this.decodedToken = localStorage.getItem('token');
    this.encodedToken = window.atob(this.decodedToken);
    // this.currentToken = this.authservice.currentToken;
    const token = this.encodedToken;
    // token wird abgerufen, entweder aus dem this.authService.getAuthToken() oder wie wir aus dem LS
    if (token) {
      // gibt es Token, wird es dem header angehängt
      req = req.clone({
        setHeaders: {Authorization: `Token ${token}`}
      });
    }

    return next.handle(req).pipe(
      // geben request in next --> pipe soll error catchen und dann was damit machen
      catchError((err) => {
        if(err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigateByUrl('')
            // wenn kein Token, dann zurück zum Login
          }
        }
        return throwError(() => err);
        // gibt error auch aus
      }));
  }
}
