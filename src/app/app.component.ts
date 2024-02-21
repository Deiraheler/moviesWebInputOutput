import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AddMovieComponent} from "./add-movie/add-movie.component";
import {ListMoviesComponent} from "./list-movies/list-movies.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {Movie} from "./movie.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMovieComponent, ListMoviesComponent, MovieDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'moviesWeb';
  protected readonly Movie = Movie;

  public mySelectedMovie!: Movie;

  setSelectedMovie(movie: Movie){
    this.mySelectedMovie = movie;
  }
}
