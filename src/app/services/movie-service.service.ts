import { Injectable } from '@angular/core';
import {Movie} from "../movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }

  movieList = [
    new Movie( "The God father", "1972", "Francis Ford Coppola"),
  ];

  addMovie(movieTitle: string, moviedirector: string, movieyear: string){
    this.movieList.push(new Movie(movieTitle, movieyear, moviedirector));
  }

  getMovies(){
    return this.movieList;
  }
}
