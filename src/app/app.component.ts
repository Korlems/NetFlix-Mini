import { Component } from '@angular/core';
import {MOVIES} from '../db-data';
import {Movie} from  '../movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "NetFlix-Mini Search"

 prison = MOVIES[0];
 rambo = MOVIES[1];
 terminator = MOVIES[2];
 peppermint = MOVIES[3];
venom = MOVIES[4];
airforce  = MOVIES[5];
locke = MOVIES[6];
home_alone = MOVIES[7];
passion = MOVIES[8];
matrix = MOVIES[9];
eden = MOVIES[10];
galaxy = MOVIES[11];


onMovieSelected(movie: Movie) {
  console.log("App Module - click event bubbled....", movie);
}

}
