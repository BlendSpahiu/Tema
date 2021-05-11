 import { GamesService } from 'src/app/services/games.service';
import { Component, OnInit } from '@angular/core';
import {filter, publish} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = new Array();
  constructor(private service: GamesService) { }

  ngOnInit(): void {

    this.getData();
  }

  getData(){
    this.service.getAll().subscribe( income => {


        income.forEach(obj => {
          if (obj.categories === 'RPG' ){
            this.data.push(obj);
          }
        })
        console.log(this.data);
    })
  }

}
