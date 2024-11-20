import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatestudentService } from 'src/app/services/createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

    students:any=[];
   
    public studentForm:FormGroup=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      gender:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(6000000000),Validators.maxLength(999999999)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      batch:new FormControl('',[Validators.required]),
      address:new FormGroup({
        city:new FormControl(),
        mandal:new FormControl(),
        district:new FormControl('',[Validators.required]),
        state:new FormControl(),
        pincode:new FormControl('',[Validators.required,Validators.min(500000),Validators.max(599999)]),
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
          percentage:new FormControl('',[Validators.required, Validators.min(0), Validators.max(100)]),
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

      this.studentForm.markAllAsTouched();
      
      console.log(this.studentForm.value);
      if(this.studentForm.valid){
        this.createstudentService.addstudentsDetails(this.studentForm.value).subscribe(
          (data:any)=>{
            alert('created successfully');
          },
          (err:any)=>{
            alert('err.error');
          }
        )
      }
      
    }
}
