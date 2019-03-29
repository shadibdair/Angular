import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: []
})
export class SingleCountryComponent implements OnInit {

  
  public countryList:Country[];
  public selectedCountryName:string;
  public selectedCountry:Country;

  
  public getSelectedCountry(name:string):void{
      for(let index=0; index<this.countryList.length; index++){
        if(this.countryList[index].name==name){
          this.selectedCountry=this.countryList[index];
          break;
        }
      }
  }






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
