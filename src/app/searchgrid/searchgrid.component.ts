import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-searchgrid',
  templateUrl: './searchgrid.component.html',
  styleUrls: ['./searchgrid.component.css']
})
export class SearchgridComponent {
  
  searchValue: string = '';
  searchColumn: string = 'username'; // Default search column
  users: any;
  sub: any;
  data: any

  constructor(private servicesService: ServicesService) {

  }

  ngOnInit() {
    // Fetch your data from a service
    this.servicesService.getusers().subscribe((data: any,) => {
      this.users = data;
     
      this.users = this.sub.subscribe((data: any) => {
        console.log(data)
      })
    }
    )
  }
  searchByColumn() {
    if (this.searchValue === '') {
      // Reset the user list to the original data when searchValue is empty
      this.servicesService.getusers().subscribe((data: any) => {
        this.users = data;
      });
    } else {
      // Filter the user list based on the search criteria
      this.users = this.users.filter((item: any) => {
        if (this.searchColumn === 'username') {
          return item.username.toLowerCase().includes(this.searchValue.toLowerCase());
        } else if (this.searchColumn === 'id') {
          return item.id.toString().includes(this.searchValue);
        } else if (this.searchColumn === 'name') {
          return item.name.toString().includes(this.searchValue);
        } else if (this.searchColumn === 'email') {
          return item.email.toString().includes(this.searchValue);
        }
        return false; // Handle the default case
      });
    }
  }

  // searchByColumn() {
  //   if (this.searchColumn === 'username') {
  //     this.users = this.users.filter((item:any) =>
  //       item.username.toLowerCase().includes(this.searchValue.toLowerCase())
  //     );
  //   } else if (this.searchColumn === 'id') {
  //     this.users = this.users.filter((item:any) =>
  //       item.id.toString().includes(this.searchValue)
  //     );
  //   }else if (this.searchColumn === 'name') {
  //     this.users = this.users.filter((item:any) =>
  //       item.name.toString().includes(this.searchValue)
  //     );
  //   }
  //   else if (this.searchColumn === 'email') {
  //     this.users = this.users.filter((item:any) =>
  //       item.email.toString().includes(this.searchValue)
  //     );
  //   }
  
  // }
}

