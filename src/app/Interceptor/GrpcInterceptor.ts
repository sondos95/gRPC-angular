import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, from, Observable, throwError } from 'rxjs';
import { AuthService } from '../Services/AuthService';


@Injectable({
  providedIn: 'root'
})
export class GrpcInterceptor implements HttpInterceptor {
  idle: any;
  constructor(private _authService: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   debugger
      return from(
        this._authService.getAccessToken()
          .then(token => {
            if(!localStorage.getItem("sid") || localStorage.getItem("sid") != sessionStorage.getItem("sessionid"))
            {
              this._authService.logout();
            }
            const clonedRequest = req.clone({
                setHeaders: {
                  // Convert grpc.Metadata to headers
                  'grpc-metadata-authorization': `Bearer ${token || ""}`,
                  'grpc-metadata-x-custom-header': 'custom-value'
                  // Add other headers as needed
                }
              });
            return next.handle(clonedRequest).pipe(
                catchError((error: HttpErrorResponse) => {
                  // Handle errors if needed
                  return throwError(error);
                })
              ).toPromise();
          })
      );
    }
  }

