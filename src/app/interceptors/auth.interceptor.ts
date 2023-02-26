import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr/public_api';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    let newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer Taner Saydam")
    });

    return next.handle(newRequest);
  }
}
