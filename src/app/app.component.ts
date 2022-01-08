import { Component } from '@angular/core';
import { UserDetails } from './service/user-details';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Pay_Roll';
   user:any;
   empDetailList:UserDetails[]=[];
   

  constructor(){}
  ngOnInit(){
   
  }


  

}
