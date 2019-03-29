import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { 
    console.log("I am in the constructor");
  }

  ngOnInit() {
    console.log("I am in the ngOnInit");
  }
 

}
