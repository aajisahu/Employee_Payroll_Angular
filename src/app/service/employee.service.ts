import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private httpClient: HttpClient ) { }

  getUser(){
    return this.httpClient.get(`http://localhost:8080/employeePayrollservice/get`);
  }
  
}
