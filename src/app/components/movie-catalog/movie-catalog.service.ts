import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKey, apiUrl } from '../../../../environment';

@Injectable({
  providedIn: 'root',
})
export class MovieCatalogService {
  constructor(private http: HttpClient) {}

  SearchMovies(title: string): Observable<any> {
    return this.http.get(`${apiUrl}?apikey=${apiKey}&s=${title}`);
  }
}
