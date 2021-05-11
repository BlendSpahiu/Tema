import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: any;
  currentGame = null;
  currentIndex = -1;
  title = '';

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.service.getAll()
      .subscribe(
        data => {
          this.games = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentGame = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index): void {
    this.currentGame = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.service.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.service.findByTitle(this.title)
      .subscribe(
        data => {
          this.games = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
