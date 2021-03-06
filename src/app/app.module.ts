import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      DropDownsModule,
      TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
