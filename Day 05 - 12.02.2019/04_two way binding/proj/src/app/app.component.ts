import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public eyeColor:string="blue";
  public age:number=20;
  public firstName:string="Bob";

  public setName(newName:string):void{
    this.firstName=newName;
  }
}
