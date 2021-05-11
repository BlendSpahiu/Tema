import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GamesService} from "../../services/games.service";
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-open-world',
  templateUrl: './open-world.component.html',
  styleUrls: ['./open-world.component.css']
})
export class OpenWorldComponent implements OnInit {


  data = new Array();
  currentGame: null;
  constructor(private service: GamesService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.getData();
  }


  openDialog(id): void {
      this.service.get(id).subscribe(data =>{
        this.currentGame = data;

        const dialogRef = this.dialog.open(DialogComponent, {
          width: '600px',
          backdropClass: 'custom-dialog-backdrop-class',
          panelClass: 'custom-dialog-panel-class',
          data: { _game: this.currentGame }

        });
      });
    }

  getData(){
    this.service.getAll().subscribe( income => {


      income.forEach(obj => {
        if (obj.categories === 'Open World'){
          this.data.push(obj);
        }
      })
      console.log(this.data);
    })
  }

}
