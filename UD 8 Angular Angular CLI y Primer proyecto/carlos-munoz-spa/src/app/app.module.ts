import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { DataService } from './functionsNotComponent/data.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { GenericTableComponent } from './generic-table/generic-table.component';

const materialComponents = [
  MatSelectModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    FilterComponent
  ],

  imports: [
    BrowserModule,
    materialComponents,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],

  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
