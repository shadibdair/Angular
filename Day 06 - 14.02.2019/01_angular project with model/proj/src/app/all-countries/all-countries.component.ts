import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {


  public countryList:Country[];

  constructor() { 
    this.countryList= [
        {
            "currencies": [
                {
                    "code": "AFN",
                    "name": "Afghan afghani",
                    "symbol": "؋"
                }
            ],
            "name": "Afghanistan",
            "capital": "Kabul",
            "population": 27657145,
            "borders": [
                "IRN",
                "PAK",
                "TKM",
                "UZB",
                "TJK",
                "CHN"
            ]
        },
        {
            "currencies": [
                {
                    "code": "EUR",
                    "name": "Euro",
                    "symbol": "€"
                }
            ],
            "name": "Åland Islands",
            "capital": "Mariehamn",
            "population": 28875,
            "borders": []
        },
        {
            "currencies": [
                {
                    "code": "ALL",
                    "name": "Albanian lek",
                    "symbol": "L"
                }
            ],
            "name": "Albania",
            "capital": "Tirana",
            "population": 2886026,
            "borders": [
                "MNE",
                "GRC",
                "MKD",
                "KOS"
            ]
        }
    ];
    

  }

  ngOnInit() {
  }

}
