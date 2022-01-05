import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { PostService } from 'src/app/service/post-service';




@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employee: EmployeeService ){}

  addEmp:PostService[]=[];
  ngOnInit(): void {
  }
  addNewEmp(addEmpForm:any){
    console.log(JSON.stringify(addEmpForm.value));
    this.addEmp=addEmpForm.value;
    this.employee.createEmp(this.addEmp).subscribe(data =>{
    
    })
  }
  
    

}
