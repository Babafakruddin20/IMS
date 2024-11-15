import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreatestudentService } from 'src/app/services/createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

    students:any=[];
   
    public studentForm:FormGroup=new FormGroup({
      name:new FormControl(),
      gender:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      batch:new FormControl(),
      address:new FormGroup({
        city:new FormControl(),
        mandal:new FormControl(),
        district:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl(),
      }),
      education: new FormArray([]),

      company: new FormGroup({
        name:new FormControl(),
        location:new FormControl(),
        package:new FormControl(),
        offerDate:new FormControl(),
      }),
      sourceType:new FormControl(),
    })

    get educationFormArray(){
      return this.studentForm.get('education')as FormArray;
    }
    addEducation(){
      this.educationFormArray.push(
        new FormGroup({
          qualification:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl(),
        })
      )
    }

    constructor(private createstudentService:CreatestudentService ){
      this.studentForm.get('sourceType')?.valueChanges.subscribe(
        (data:any)=>{
          if (data === 'Direct'){
            this.studentForm.addControl('sourceForm',new FormControl());
            this.studentForm.removeControl('Refer');
          }
          else{
            this.studentForm.addControl('Refer', new FormControl());
            this.studentForm.removeControl('sourceForm');
          }
        }
      )
    }

    delete(i:number){
      this.educationFormArray.removeAt(i);
    }

    submit(){
      console.log(this.studentForm.value);
      this.createstudentService.addstudentsDetails(this.studentForm.value).subscribe(
        (data:any)=>{
          alert('created successfully');
        },
        (err:any)=>{
          alert('err.errpr');
        }
      )
    }
}
