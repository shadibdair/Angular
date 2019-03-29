import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/services/person.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {

   //DI
   constructor(public myPersonService:PersonService) { }

  ngOnInit() {
  }

}
