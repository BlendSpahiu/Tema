import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  public selectedFile: File = null;
  public imageSrc: string;
  public formData = new FormData();
  public isUploaded = false;
  _game = {
    title: '',
    description: '',
    published: false,
    category: '',
    filePath: this.imageSrc,
    price: '',
  };
  submitted = false;

  constructor(private tutorialService: GamesService) { }

  ngOnInit(): void {

  }

  saveTutorial(): void {
    const data = {
      title: this._game.title,
      description: this._game.description,
      categories: this._game.category,
      price: this._game.price,
      filePath: this.imageSrc
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  source = [
    { id: 1, name: 'First-Person' },
    { id: 2, name: 'Open Wolrd' },
    { id: 3, name: 'MMO' },
    { id: 4, name: 'RPG' },
    { id: 5, name: '2nd Person' },
  ];
  newTutorial(): void {
    this.submitted = false;
    this._game = {
      title: '',
      description: '',
      published: false,
      category: '',
      filePath: '',
      price: ''


    };
  }
  onSelectFile(event) {
    this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }

  performUpload() {
    this.formData.set('file', this.selectedFile, this.selectedFile.name);
    this.tutorialService.uploadImage(this.formData).subscribe(
      res => {
        this.imageSrc = res;
        console.log(this.imageSrc)
        this.isUploaded = true;

        // return this.imageSrc = null;
      }
    );
  }

}
