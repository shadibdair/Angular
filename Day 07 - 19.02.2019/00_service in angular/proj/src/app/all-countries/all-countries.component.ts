import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  // DI 
  constructor(public myCountryService:CountryService) { }


  public setSelected(newCountry:string):void{
      this.myCountryService.getSelectedCountry(newCountry);
  }

  ngOnInit() { }

}
