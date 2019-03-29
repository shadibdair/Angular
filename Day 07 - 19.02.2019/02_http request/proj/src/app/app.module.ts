import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    DeletePersonComponent,
    ViewPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
