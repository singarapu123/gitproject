import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
// import { Service, TabservicesService } from '../tabservices.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isPopupVisible: boolean;
  subscribe: any;
  servicesService: any;
 
  // constructor() {
  //   // service: Service
  //   // this.companies = service.getCompanies();
  //   // this.itemCount = this.companies.length;

     
  // }

  togglePopup(): void {
      this.isPopupVisible = !this.isPopupVisible;
  }
  name:any;

  users:any;
  sub:any;
  data:any
  wings:any[] =[];
  constructor(private services:ServicesService) {
    this.isPopupVisible = false;
  }

 
  ngOnInit(){
    this.services.getusers().subscribe((data: any,) => {
      this.users = data;
      this.sub = this.subscribe((data: any) => {
        console.log(data);
      })
    })
    
  }



 

  // companies: TabservicesService[];

  // itemCount: number;

  // constructor(service: Service) {
  //   this.companies = service.getCompanies();
  //   this.itemCount = this.companies.length;
  // }





}
