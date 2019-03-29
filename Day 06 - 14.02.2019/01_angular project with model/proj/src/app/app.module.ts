import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    SingleCountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
