import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { UserDetails } from './service/user-details';
import { PostService } from './service/post-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Pay_Roll';
   user:any;
   empDetailList:UserDetails[]=[];
   

  constructor( private employee: EmployeeService ){}
  ngOnInit(){
    this.employee.getUser().subscribe( data => { 
      this.user=data;
      this.empDetailList=this.user.employeePayrollDataList;
        console.log(this.empDetailList);});

  }


  

}
