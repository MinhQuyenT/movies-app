import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/_core/_models/movie';
import { MoviesService } from 'src/app/_core/_services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((res: any) => {
      this.movies = res.results;
      console.log(this.movies);
    })
  }

}
