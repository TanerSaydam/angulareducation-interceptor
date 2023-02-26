import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../services/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _err: ErrorService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse)=>{        
        this._err.errorHandler(err);

        return of();
      })
    );
  }
}
