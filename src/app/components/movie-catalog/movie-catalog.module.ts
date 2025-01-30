import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MovieCatalogComponent } from './movie-catalog.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Movie Catalog' },
    children: [
      {
        path: '',
        component: MovieCatalogComponent,
        data: { breadcrumb: 'Movie Catalog' },
      },
      {
        path: 'database',
        children: [
          {
            path: '',
            component: MovieCatalogComponent,
            data: { breadcrumb: null },
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [MovieCatalogComponent],
  imports: [CommonModule],
})
export class MovieCatalogModule {}
