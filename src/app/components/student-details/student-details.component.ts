import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatestudentComponent } from '../createstudent/createstudent.component';
import { CreatestudentService } from 'src/app/services/createstudent.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  public student:any ={};

  constructor(private _activatedRoute:ActivatedRoute, private _createstudentService:CreatestudentService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        // api call with data.id
        _createstudentService.getstudent(data.id).subscribe(
          (data:any)=>{
            this.student=data;
          }
        )

      }
    )
  }

}
