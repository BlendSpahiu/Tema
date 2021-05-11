import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.css']
})
export class GamesDetailsComponent implements OnInit {
  currentGame = null;
  message = '';

  constructor(
    private service: GamesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getGame(this.route.snapshot.paramMap.get('id'));
  }

  getGame(id): void {
    this.service.get(id)
      .subscribe(
        data => {
          this.currentGame = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentGame.title,
      description: this.currentGame.description,
      published: status
    };

    this.service.update(this.currentGame.id, data)
      .subscribe(
        response => {
          this.currentGame.published = status;

          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {

    this.service.update(this.currentGame.id, this.currentGame)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.service.delete(this.currentGame.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/games']);
        },
        error => {
          console.log(error);
        });
  }
}
