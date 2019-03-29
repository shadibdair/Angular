import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myLink:string="home";


  public setLink(str:string){
    this.myLink=str;
  }
}
