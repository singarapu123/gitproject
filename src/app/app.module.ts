import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DxAccordionModule, DxButtonModule, DxDataGridModule, DxDateBoxModule, DxDrawerModule, DxListModule, DxMenuModule, DxPopoverModule, DxRadioGroupModule } from "devextreme-angular";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; 
import { DxPopupModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service';
import {DxTabPanelModule, DxCheckBoxModule, DxTemplateModule,  DxBulletModule,}from 'devextreme-angular';

import { DxTabsModule, } from 'devextreme-angular';

import { DxiColumnModule } from 'devextreme-angular/ui/nested';
import { TabComponent } from './tab/tab.component';
import { ListComponent } from './list/list.component';
import { SearchgridComponent } from './searchgrid/searchgrid.component';








// import {  DxiColumnComponent } from "devextreme-angular/ui/nested";

@NgModule({
  declarations: [

    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PagenotfoundComponent,
    TabComponent,
    ListComponent,
    SearchgridComponent,


 
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     DxDrawerModule ,
     DxMenuModule,
     DxPopupModule,
     DxButtonModule,
     DxPopoverModule,DxTextBoxModule,
     DxDateBoxModule,
     DxSelectBoxModule,FormsModule,
     HttpClientModule,DxTabsModule,
     DxCheckBoxModule, DxTemplateModule ,DxTabPanelModule,DxDataGridModule,DxiColumnModule,
     DxAccordionModule,
     DxBulletModule,DxListModule,
     ReactiveFormsModule,
     FormsModule, DxSelectBoxModule, DxListModule, DxCheckBoxModule,
     DxRadioGroupModule

    
   
     

    
     
    //  DxiColumnComponent
   
   
  ],
  exports:[],

  providers: [ServicesService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
