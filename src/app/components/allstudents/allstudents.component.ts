import { Component } from '@angular/core';
import { CreatestudentService } from 'src/app/services/createstudent.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
    students:any=[];
    term:string="";
    column:string="";
    order:string="";
    public page:number=1;



    constructor(private studentService:CreatestudentService){
      studentService.getstudents().subscribe(
        (data:any)=>{
          this.students=data;
        },
        (err:any)=>{
          alert('internal server error')
        }
      )
    }

    delete(id:string){
      this.studentService.deletestudents(id).subscribe(
        (data:any)=>{
          alert('deleted successfully');
          location.reload();
        },
        (err:any)=>{
          alert(err.error);
        }
      )
    }

    search(){
      this.studentService.getFilteredstudents(this.term).subscribe(
        (data:any)=>{
          this.students=data;
        },
        (err:any)=>{
          alert('internal server error');
        }
      )
    }

    sort(){
      this.studentService.getSortedstudents(this.column,this.order).subscribe(
        (data:any)=>{
          this.students=data;
        },
        (err:any)=>{
          alert(err.error);
        }
      )
    }

    pagination(){
      this.studentService.getPagedstudents(this.page).subscribe(
        (data:any)=>{
          this.students=data;
        },
        (err:any)=>{
          console.log("internal server error");
        }
      )
    }
}
