import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bobIsMale: boolean = true;

  public dayOfWeek: number = new Date().getDay() + 1;

  public student: any;

  public initStudentInfo(): void {
    this.student = {
      "age": 20,
      "name": "Alice"
    }
  }
}
