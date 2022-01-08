import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../service/user-details';
import { EmployeeService } from '../service/employee.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  registerForm!:FormGroup;
  submitted=false;
  user:any;
  empDetailList:UserDetails[]=[];

 constructor(private employee: EmployeeService, private router:ActivatedRoute ){}
 ngOnInit(){
   this.employee.getUser().subscribe( data => { 
     this.user=data;
     this.empDetailList=this.user.employeePayrollDataList;
       console.log(this.empDetailList);
       
        });
  }

    get f(){
    return this.registerForm.controls;
  }

  delete(id:number){
    this.empDetailList.slice(id,1);
    this.employee.deleteEmp(id).subscribe((result => {
        console.log(result)
    }))

  }

}