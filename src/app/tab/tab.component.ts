import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import dxCheckBox from 'devextreme/ui/check_box';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor(private servicesService: ServicesService) {
    this.showDragIcons = true;
    this.onReorder = this.onReorder.bind(this);
  }
  ngOnInit(): void {
    this.servicesService.getusers().subscribe((data: any,) => {
      this.users = data;
      this.sub = this.subscribe((data: any) => {
        console.log(data);
      })
    })

    this.serviceData();
  }
  showDragIcons: boolean;
  deletionColumns: string[] = ['name', 'username', 'email'];
  name: any;
  subscribe: any
  users: any;
  sub: any;
  data: any

  tabDataSource: any[] = []

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



  tabColumnData: any[] = [
    {
      id: 1, tabName: 'Tab1', singleRow: true, subData: [
        { columnName: "Date", caption: "Date", dataType: "date" },
        { columnName: "Branch", caption: "Branch", dataType: "MasterId" },
        { columnName: "remark", caption: "Remark", dataType: "string" },
      ],
    },
    {
      id: 2, tabName: 'Tab2', singleRow: false, subData: [
        { columnName: "Date", caption: "Date", dataType: "date" },
        { columnName: "Branch", caption: "Branch", dataType: "selectbox" },
        { columnName: "remark", caption: "Remark", dataType: "string" },
      ]
    },
    {
      id: 3, tabName: 'Tab3', singleRow: false, subData: [
        { columnName: "Date", caption: "Date", dataType: "date" },
        { columnName: "Branch", caption: "Branch", dataType: "MasterId" },
        { columnName: "remark", caption: "Remark", dataType: "string" },
      ]
    },
    {
      id: 4, tabName: 'Tab4', singleRow: false, subData: [
        { columnName: "Date", caption: "Date", dataType: "date" },
        { columnName: "Branch", caption: "Branch", dataType: "MasterId" },
        { columnName: "remark", caption: "Remark", dataType: "string" },
      ]
    },
    {
      id: 5, tabName: 'Tab5', singleRow: true, subData: [
        { columnName: "Date", caption: "Date", dataType: "date" },
        { columnName: "Branch", caption: "Branch", dataType: "MasterId" },
        { columnName: "remark", caption: "Remark", dataType: "string" },
      ]
    },
    {
      id: 6, tabName: 'Tab6', singleRow: false, subData: [
        { columnName: "Date", caption: "Date", dataType: "date" },
        { columnName: "Branch", caption: "Branch", dataType: "MasterId" },
        { columnName: "remark", caption: "Remark", dataType: "string" },
      ]
    },

  ];
   datea=Date();

  serviceData() {
    this.tabDataSource = [
      { Date: "1/09/2023", Branch: "srnagar", remark: "61",date:this.datea, },
      { Date: "2/09/2023", Branch: "hyd", remark: "12",date:this.datea},
      { Date: "3/09/2023", Branch: "khammam", remark: "39" ,date:this.datea},
      { Date: "4/09/2023", Branch: "gandhinagar", remark: "44",date:this.datea },
      { Date: "5/09/2023", Branch: "delhi", remark: "67",date:this.datea },
      { Date: "6/09/2023", Branch: "usa", remark: "23",date:this.datea },
      { Date: "7/09/2023", Branch: "canada", remark: "98",date:this.datea },
      { Date: "8/09/2023", Branch: "england", remark: "12",date:this.datea },
      { Date: "9/09/2023", Branch: "west Indians", remark: "0",date:this.datea },
      { Date: "10/09/2023", Branch: "poland", remark: "43",date:this.datea },

    ]

  }
  onReorder(e:any) {
    const visibleRows = e.component.getVisibleRows();
    const toIndex = this.users.findIndex((item: { id: any; }) => item.id === visibleRows[e.toIndex].data.id);
    const fromIndex = this.users.findIndex((item: {id: any; }) => item.id === e.itemData.id);

    this.users.splice(fromIndex, 1);
    this.users.splice(toIndex, 0, e.itemData);
    this.onDragChange = this.onDragChange.bind(this);
  }
  onDragChange(e: any) {
    if (e.toComponent === 'outside' && e.fromComponent === 'grid') {
      // A row is being dragged outside of the DataGrid.
      // Determine which columns to use for deletion based on the deletionColumns array.
      const rowToDelete = e.itemData;

      // Create a condition for deletion based on specified columns.
      const shouldDelete =
        this.deletionColumns.some((column) => {
          return rowToDelete[column]; // Check if the column value exists and is truthy.
        });

      if (shouldDelete) {
        // Delete the row.
        const rowIndex = this.users.findIndex((item: any) => item.id === rowToDelete.id);

        if (rowIndex !== -1) {
          // Remove the row from the array.
          this.users.splice(rowIndex, 1);
          // Optionally, you can send a request to delete the row on the server as well.
          // Call your delete API here.
        }
      }
    }

}
}
