import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  doLogin(playload: any): Observable<any>{
    return this.httpclient.post("https://reqres.in/api/login",playload);
    // observing the response from api in form of token catching ther srevice and apply to service in api observing the token
  }
}
