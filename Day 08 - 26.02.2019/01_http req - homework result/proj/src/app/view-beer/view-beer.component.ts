import { Component, OnInit } from '@angular/core';
import { BeerService } from '../shared/services/beer.service';

@Component({
  selector: 'app-view-beer',
  templateUrl: './view-beer.component.html',
  styleUrls: ['./view-beer.component.css']
})
export class ViewBeerComponent implements OnInit {

  constructor(public myBeerService:BeerService) { }

  ngOnInit() {
  }

}
