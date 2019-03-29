import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/services/person.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {


  //DI
  constructor(public myPersonService:PersonService) { }

  ngOnInit() {
  }

}
