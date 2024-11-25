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

  getstudents():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  getstudent(id:string):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/'+id);
  }

  editstudent(id:string, data:any):Observable<any>{
    return this.httpClient.put(this.baseUrl+'/'+id,data)
  }

  deletestudents(id:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl+'/'+id);
  }

  getFilteredstudents(term:string):Observable<any>{
    return this.httpClient.get(this.baseUrl+"?filter="+term);
  }

  getSortedstudents(column:string, order:string):Observable<any>{
    return this.httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  getPagedstudents(page:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+"?limit=10&page="+page);
  }





}
