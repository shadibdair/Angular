import { Component } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userList: User[];
  public copyUserList: User[];
  public selectedUser:string;
  public selectedAvatar:string;

  public setUserAvatar(name:string):void{
      for(let i=0; i<this.userList.length; i++){
        if(this.userList[i].first_name == name){
          this.selectedAvatar=this.userList[i].avatar;
        }
      }
  }

  public setById(start:number, end:number):void{
    this.copyUserList=[];

    for(let i=0; i<this.userList.length; i++){
      if(this.userList[i].id>=start && this.userList[i].id<=end){
        this.copyUserList.push(this.userList[i]);
      }
    }
  }


  public setOrderDec():void{
    this.copyUserList=[];

    for(let i=this.userList.length-1; i>=0; i--){
        this.copyUserList.push(this.userList[i]);
    }
  }


  public setOrderInc():void{
    this.copyUserList=this.userList;
  }


  public constructor() {
    this.userList = [
      {
        "id": 4,
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        "id": 5,
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        "id": 6,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ];

    this.copyUserList=this.userList;
  }
}
