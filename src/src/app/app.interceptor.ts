import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
class AuthRequest {

	nonAuthenticatedRequests;

	constructor() {
		this.nonAuthenticatedRequests = [
			'http://localhost:7080/user/login',
			'http://localhost:7080/user/create'
		];
	}

	isAuthRequest(requrl): boolean {
		let flag = true;
		for (let key in this.nonAuthenticatedRequests) {
			if (this.nonAuthenticatedRequests[key] == requrl) {
				flag = false;
				return;
			}
		}
		return flag;
	}
}




@Injectable()
export class AppInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let body = req.body;
		let reqObject = req;

		let authReqObj = new AuthRequest();

		if (authReqObj.isAuthRequest(req.url)) {
			console.log('intercepted request', req);
			const authReq = req.clone({
				headers: req.headers.set('x-access-token', ''),
				body: body
			});

			reqObject = authReq;
		}
		return next.handle(reqObject).pipe(
			map(response => {

				if (reqObject.url == "http://localhost:7080/user/login") {
					console.log(" response block ");
				}
				console.log('Intercepted Response', response);
				return response;
			}));
	}
}