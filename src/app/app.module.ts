import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'movie-catalog',
    loadChildren: () =>
      import('./components/movie-catalog/movie-catalog.module').then(
        (m) => m.MovieCatalogModule
      ),
  },
  {
    path: '**',
    redirectTo: 'movie-catalog', // Redirect all unknown routes to movie-catalog
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
