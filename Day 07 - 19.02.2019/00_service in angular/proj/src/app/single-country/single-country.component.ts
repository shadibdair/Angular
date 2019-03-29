import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/models/country.model';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: []
})
export class SingleCountryComponent implements OnInit {

  // DI 
  constructor(public myCountryService:CountryService) { }

  ngOnInit() {
  }

}
