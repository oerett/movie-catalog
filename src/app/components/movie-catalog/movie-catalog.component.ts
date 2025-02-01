import { Component } from '@angular/core';
import { MovieCatalogService } from './movie-catalog.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrl: './movie-catalog.component.scss',
  standalone: false,
})
export class MovieCatalogComponent {
  title: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieCatalogService) {}

  searchMovies(title: string) {
    this.movieService.SearchMovies(title).subscribe((res: any) => {
      this.movies = res.Response === 'True' ? res.Search.slice(0, 3) : [];
    });
  }

  checkIfItsCleaned(title: string) {
    if (title == '') {
      this.movies = [];
      return;
    }
  }
}
