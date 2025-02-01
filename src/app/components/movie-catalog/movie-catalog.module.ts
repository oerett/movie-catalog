import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCatalogComponent } from './movie-catalog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieCatalogService } from './movie-catalog.service';

const routes: Routes = [
  {
    path: 'database',
    component: MovieCatalogComponent,
  },
];

@NgModule({
  declarations: [MovieCatalogComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MovieCatalogService],
  exports: [MovieCatalogComponent],
})
export class MovieCatalogModule {}
