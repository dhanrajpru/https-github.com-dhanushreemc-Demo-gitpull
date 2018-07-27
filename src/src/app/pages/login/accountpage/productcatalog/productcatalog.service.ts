import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProductService {

  private productServiceUrl = 'http://34.213.38.204:7080/product/catalog';  // URL to web api
  private serviceResponse;
  constructor (
    private http: HttpClient
    ) {
    this.serviceResponse = {};
  }

  productsFetch(serviceInput, callback){
    return this.http.get(this.productServiceUrl, { params: serviceInput }).subscribe(data => {
      console.log(data);
      callback(data);
    },
    err=>{
      console.log(err);
    });

  }


  productsCount(callback){
    this.productServiceUrl + '/totalcount';
    return this.http.get(this.productServiceUrl, httpOptions).subscribe(data => {
      console.log(data);
      callback(data);
    },
    err=>{
      console.log(err);
    });

  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

   private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('error',error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}