import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {GamesListComponent} from "./games-list.component";
import {GamesDetailsComponent} from "../games-details/games-details.component";
import {FormsModule} from "@angular/forms";
import { FilterPipe } from '../..//services/filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: GamesListComponent,
  },
];

@NgModule({
  declarations: [GamesListComponent, FilterPipe],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule]

})
// @ts-ignore
export class gamesListModule { }
