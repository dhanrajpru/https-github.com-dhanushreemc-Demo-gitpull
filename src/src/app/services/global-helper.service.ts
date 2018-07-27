import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GlobalHelperService {
  private serviceUrl: string;
  constructor(private http: HttpClient) {
    this.serviceUrl = environment.serviceBaseUrl;
  }

  async readJsonFile(filename: string){
    return await this.http.get('../../assets/json/'+filename+'.json');
  }

  
}