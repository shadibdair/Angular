import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    public changeMovie(movie:any):void{
      this.movieName=movie.movie_name;
      this.moviePrice=Number(movie.price);
      this.movieDate=movie.movie_date;
      this.countryMovie="USA";
    }

    public movieName:string;
    public moviePrice:number;
    public movieDate:string;
    public countryMovie:string;

    public movieList:any[]=[{
      "id": 1,
      "movie_name": "Coraline",
      "price": "7.13",
      "movie_date": "7/9/2017"
     }, {
      "id": 2,
      "movie_name": "Finding Dory",
      "price": "10.09",
      "movie_date": "12/12/2016"
     }, {
      "id": 3,
      "movie_name": "The Wailing",
      "price": "10.69",
      "movie_date": "3/9/2017"
     }, {
      "id": 4,
      "movie_name": "The Void",
      "price": "8.85",
      "movie_date": "10/30/2017"
     }, {
      "id": 5,
      "movie_name": "Tower",
      "price": "8.47",
      "movie_date": "4/6/2017"
     }];
}
