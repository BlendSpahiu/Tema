import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {publish} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-first-person',
  templateUrl: './first-person.component.html',
  styleUrls: ['./first-person.component.css']
})
export class FirstPersonComponent implements OnInit {
  currentGame =  null;
  dialogValue: string;
  sendValue: string;
  data = new Array();
  constructor(private service: GamesService, public dialog: MatDialog) { }

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

  ngOnInit(): void {

    this.getData();

  }

  getData(){
    this.service.getAll().subscribe( income => {


      income.forEach(obj => {
        if (obj.categories === 'First-Person'){
          this.data.push(obj);
        }
      })
      console.log(this.data);
    })
  }



}
