import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { CreatestudentComponent } from './components/createstudent/createstudent.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { PackagesPipe } from './pipes/packages.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotfoundComponent,
    CreatestudentComponent,
    AllstudentsComponent,
    StudentDetailsComponent,
    PercentagePipe,
    PackagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
