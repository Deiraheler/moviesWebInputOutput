import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieServiceService} from "../services/movie-service.service";
import {Movie} from "../movie.model";

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.sass'
})
export class ListMoviesComponent implements OnInit{
  movies:any[] = [];
  private currentMovie!: Movie;

  @Output() onSelectedMovie: EventEmitter<Movie>;

  constructor(private movieService:MovieServiceService) {
    this.onSelectedMovie = new EventEmitter();
  }

  ngOnInit(){
    this.movies = this.movieService.getMovies();
  }

  selectMovie(mymovie: Movie){
    console.log(mymovie);
    this.currentMovie=mymovie;
    this.onSelectedMovie.emit(mymovie);
  }

  isSelected(movie: Movie): boolean{
    if (!movie || !this.currentMovie){
      return false
    }else{
      return movie.title == this.currentMovie.title;
    }
  }
}
