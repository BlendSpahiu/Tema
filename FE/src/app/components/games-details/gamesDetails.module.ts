import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {GamesDetailsComponent} from "./games-details.component";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: GamesDetailsComponent,
  },
];

@NgModule({
  declarations: [GamesDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule]

})
// @ts-ignore
export class gamesDetailsModule { }
