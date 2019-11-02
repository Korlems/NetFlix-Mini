import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {MOVIES} from '../../db-data';
import {Movie} from '../../movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
title = "NetFlix-Mini Search"


  @Input()
  movie:Movie;

  @Output()
  movieSelected = new EventEmitter<Movie>();
  constructor() { }
  ngOnInit() {
  }
 onMovieView() {
   console.log(' Card componentm- button clicked.....');
   this.movieSelected.emit(this.movie);
 }
}
