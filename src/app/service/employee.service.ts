import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post-service';
import { AddEmployeeComponent } from '../add-employee/add-employee/add-employee.component';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(  private httpClient: HttpClient ) { }
postData:PostService[]=[]
  getUser(){
    return this.httpClient.get(`http://localhost:8080/employeePayrollservice/get`);
  }

      url="http://localhost:8080/employeePayrollservice/create";

      
      createContact(reourceBody: { name: string; gender: string; department: string[]; salary: string; startDate: string; note: string; profilePic: string; })
        {
        return this.httpClient.post(this.url,reourceBody)
        }
      
}
