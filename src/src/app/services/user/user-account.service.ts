import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface UserAccount {
  username: string,
  emailAddress: string,
  firstName: string,
  lastName: string,
  password: string,
  dateOfBirth: string,
  officeAddress1: string,
  officeAddress2: string,
  officeCity: string,
  officeState: string,
  officeCountry: string,
  officeZipCode: string,
  shippingAddress1: string,
  shippingAddress2: string,
  shippingCity: string,
  shippingState: string,
  shippingCountry: string,
  shippingZipCode: string,
  phoneNumber: string,
  zervPublicKey: string,
  shippingAddressValidationFlag: boolean,
  elegibilityForRestrictedItemsFlag: boolean
}

interface ServiceResponse {
  status: boolean,
  message: string,
  data: {
    'ref': ''
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private serviceUrl: string;
  constructor(private http: HttpClient) {
    this.serviceUrl = environment.serviceBaseUrl;
  }

  /*
   * @author      : shiva
   * @service     : createAccount
   * @description : creates a new account for the user.
   * @http-verb   : post
   * @param       : (Object)service-request
   * @return type : (Object)service-response
   * 
   */

   createAccount(servicePayload: UserAccount): Observable<ServiceResponse> {
     let serviceUrl = this.serviceUrl + 'user/account';
     return this.http.post<ServiceResponse>(serviceUrl, servicePayload, httpOptions);
   }

   updateAccount(servicePayload:object): Observable<ServiceResponse> {
     let serviceUrl = this.serviceUrl + 'user/account';
     return this.http.patch<ServiceResponse>(serviceUrl, servicePayload, httpOptions);
   }

  /*
   * @author      : shiva
   * @service     : retriveAccount
   * @description : retrives the user account information.
   * @http-verb   : get
   * @param       : (Object)service-request
   * @return type : (Object)service-response
   * 
   */

   retriveAccount(servicePayload): Observable<any> {
     let serviceUrl = this.serviceUrl + 'user/account';
     return this.http.get<ServiceResponse>(serviceUrl, servicePayload);
   }

   mfaSend(info): Observable<any>{
     let serviceUrl = this.serviceUrl + 'user/mfa';
     return this.http.post(serviceUrl, info, httpOptions);
   }

   mfaVerify(info): Observable<any>{
     let serviceUrl = this.serviceUrl + 'user/mfa';
     return this.http.put(serviceUrl, info, httpOptions);
   }

 }