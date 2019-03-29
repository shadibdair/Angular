import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonInfo } from '../models/person-info.model';
import { NewPerson } from '../models/new-person.model';
import { NewPersonData } from '../models/new-person-data.model';
import { PersonEdit } from '../models/person-edit.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public myInfo:PersonInfo;
  public myAddInfo:NewPerson;
  public myPersonEdit:PersonEdit;
  //DI
  constructor(private myHttpClient:HttpClient) {
      this.getPerson();
   }

  public getPerson(){
    this.myHttpClient.get<PersonInfo>("https://reqres.in/api/users?page=3").subscribe(
        (res)=>{ this.myInfo=res; },
        (err)=>{ console.log(err)}
    );
  }

  public addPerson(p:NewPersonData){

    this.myHttpClient.post<NewPerson>("https://reqres.in/api/users",p).subscribe(
      (res)=>{ this.myAddInfo=res; },
      (err)=>{ console.log(err)}
  );
  }

  public deletePerson(){
    this.myHttpClient.delete("https://reqres.in/api/users/2").subscribe(
      (res)=>{ alert("Success");},
      (err)=>{ console.log(err)}
  );
  }

  public editPerson(p:NewPersonData){
    this.myHttpClient.put<PersonEdit>("https://reqres.in/api/users",p).subscribe(
      (res)=>{ this.myPersonEdit=res; },
      (err)=>{ console.log(err)}
  );
  }

}
