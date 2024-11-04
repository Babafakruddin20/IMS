import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor (private authService : AuthService, private router:Router ) {
    this.loginForm= new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })

  }

  login(){
    // console.log(this.loginForm); now send this value to API subscribing the token
    this.authService.doLogin(this.loginForm.value).subscribe(
      value=>{
        localStorage.setItem("token", value.token);
        this.router.navigateByUrl("/dashboard");
        alert('success');
      },
      error=>{
        alert('failed');
      }
    )
   }
 
}
