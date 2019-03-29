import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  //DI
  constructor(public myPersonService:PersonService) { }


  ngOnInit() {
  }

}
