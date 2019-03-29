import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public firstName:string="bob";
  public hobbies:string[]=["Gaming","flying","Sport","Math"];


  public counter:number=0;

  public incrementNum():void{
      this.counter++;
  }
}
