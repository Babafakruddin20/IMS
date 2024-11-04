import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor (private authService : AuthService) {
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
        alert('success');
      },
      error=>{
        alert('failed');
      }
    )
   }
 
}
