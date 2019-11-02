import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AngularMaterialModule } from './material.module';
//import {MasonryModule} from 'angular2-masonry';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
  // MatCardModule,
   // MasonryModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
