import { Component, HostListener } from '@angular/core';
import dxSelectBox from 'devextreme/ui/select_box';
import { ServicesService } from '../services.service';
import { SearchPanel, } from 'devextreme/ui/tree_list';
import DataSource from 'devextreme/data/data_source';
import { DxiDataGridColumn } from 'devextreme-angular/ui/nested/base/data-grid-column-dxi';
import { DxiRowModule } from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  wings = [
    { Text: 'Date', dataType: 'date' },
    { Text: "Partycode", dataType: 'selectbox5' },
    { Text: "GST Transction", dataType: 'String' },
    { Text: "Service Tax", dataType: 'selectbox' },
    { Text: "shopping tax", dataType: 'String' },
    { Text: "Branch", dataType: 'selectbox1' },
    { Text: "partyAccount", dataType: 'selectbox4' },
    { Text: "shopping", dataType: 'String' },
    { Text: "credit", dataType: 'String' },
    { Text: "VATcstTra..", dataType: 'selectbox3' },
    { Text: "Remarks", dataType: 'String' },
    { Text: "Registration number", dataType: 'Number' },
    { Text: "Party GST number", dataType: 'Number' },
    { Text: "PriceList", dataType: 'selectbox2' },


  ]

  partycode: Number[] = [1, 2, 3, 4, 5];
  Branch: string[] = ["srnagar", "LBnagar", "khammam"]
  PriceList: string[] = ["34", "45", "65.34", "65.34"]
  VATcstTransaction: string[] = ["phonepay", "googlepay", "ruppepay"]
  partyAccount: string[] = ["saving Account", "Zero Account", "Yono SBI Account"]
  Partycode: string[] = ["Addvd434", "jiuiyuh@3443", "jklauie344"]




  users: any[] = [];
  pri: any;
  searchText: any = '';
  selectedColumn: string = 'username'; // Default selected column
  shouldApplyFilter: boolean = false;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.getusers().subscribe((data: any) => {
      this.users = data;
      this.pri = [
        'id',
        'name',
        'username',
        'email',
        'address.street',
        'address.city',
        'address.zipcode'
      ];
    });
  }

  // Function to apply the filter based on selected column and search text
  applyFilter() {
    if (this.selectedColumn && this.searchText !== '') {
      this.users = this.users.filter((item: any) => {
        const columnValue = this.getColumnValue(item, this.selectedColumn);
        return columnValue && columnValue.toString().toLowerCase().includes(this.searchText.toLowerCase());
      });
    } else if (this.searchText === '') {
      // If searchText is empty, reset users to the original data
      this.servicesService.getusers().subscribe((data:any) => {
        this.users = data;
      });
    }
  }
  click(){
    this.servicesService.getusers().subscribe((data:any) => {
      this.users = data;
    });
    this.searchText='';
  }
  

  // Helper function to get the column value, including nested properties
  getColumnValue(item: any, column: string): any {
    const columns = column.split('.'); // Split by dot to handle nested properties
    let value = item;

    for (const col of columns) {
      value = value[col];
    }

    return value;
  }

}




