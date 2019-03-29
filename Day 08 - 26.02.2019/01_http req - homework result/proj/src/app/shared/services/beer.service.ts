import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Beer } from '../models/beer.model';
@Injectable({
  providedIn: 'root'
})
export class BeerService {
  public beerInfo:Beer;
  constructor(private myHttpClient:HttpClient) { 
    this.getBeer();
  }


  public getBeer(){
    this.myHttpClient.get<Beer[]>("https://api.punkapi.com/v2/beers/200").subscribe(
      (res)=>{this.beerInfo=res[0];},
      (err)=>{console.log(err)},
    )
  }
}
