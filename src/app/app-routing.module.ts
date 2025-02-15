import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { AuthGuard } from './guards/auth.guard';
import { CreatestudentComponent } from './components/createstudent/createstudent.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { CandeactivatedGuard } from './guards/candeactivated.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard], children:[
    {path:'createstudent',component:CreatestudentComponent},
    {path:'allstudents',component:AllstudentsComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'edit-student/:id',component:CreatestudentComponent, canDeactivate:[CandeactivatedGuard]},
    
  ]},
  {path:' ',component:LoginComponent},
  {path:'**',component:PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
