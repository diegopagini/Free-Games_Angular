import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      headers: new HttpHeaders({
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'd99a1ff4e6mshfb69f767e8785f8p1869b2jsn979bac3942ac',
      }),
      url: `${environment.baseUrl}${request.url}`,
    });

    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn('error:', error);
        return throwError(error);
      })
    );
  }
}
