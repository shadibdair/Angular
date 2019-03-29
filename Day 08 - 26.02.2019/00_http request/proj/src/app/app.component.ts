import { Component } from '@angular/core';
import { PersonService } from './shared/services/person.service';
import { NewPersonData } from './shared/models/new-person-data.model';
import { PersonEdit } from './shared/models/person-edit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public newUser:NewPersonData=new NewPersonData();


  public editUser():void{
    let editUser:NewPersonData=new NewPersonData();
    editUser.name="Bob";
    editUser.job="ADMIN";
    
    this.myPersonService.editPerson(editUser);
  }

  public deleteUser():void{
    this.myPersonService.deletePerson();
  }
  public addUser():void{
    this.myPersonService.addPerson(this.newUser);
  }

  //DI
  constructor(public myPersonService:PersonService){
 
   
  }
}
