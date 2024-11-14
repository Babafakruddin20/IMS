import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private router:Router, private httpclient:HttpClient){
  this.httpclient.get('https://reqres.in/api/login').subscribe(
    value=>{
      console.log('value');
    },
    error=>{
      
    }
  )
}

logout(){
  localStorage.removeItem('token');
  this.router.navigateByUrl('/login');
}
}
