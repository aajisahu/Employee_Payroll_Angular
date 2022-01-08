import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(  private httpClient: HttpClient ) { }
  getUser(){
    return this.httpClient.get(`http://localhost:8080/employeePayrollservice/get`);
  }  

      url="http://localhost:8080/employeePayrollservice/create";
      createContact(reourceBody: { name: string; gender: string; department: string[]; salary: string; startDate: string; note: string; profilePic: string; })
        {
        return this.httpClient.post(this.url,reourceBody)
        }

        baseURL="http://localhost:8080/employeePayrollservice/update/10"
        
        
        udateUser(employeeId:number,data:any)
        {
            return this.httpClient.put(this.baseURL,employeeId,data);
        }
        
        deleteEmp(id1: number){
          const deleteEndpoint='http://localhost:8080/employeePayrollservice/delete/'+id1;
          return this.httpClient.delete(deleteEndpoint);
        }
      
}
