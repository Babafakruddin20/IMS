import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatestudentService {

  private baseUrl:string="https://62b9299dff109cd1dc8ca34f.mockapi.io/students"

  constructor(private httpClient:HttpClient) { }

  addstudentsDetails(data:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,data);
  }
}
