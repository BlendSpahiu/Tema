import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddGameComponent} from "./add-game.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: AddGameComponent,
  },
];


@NgModule({
  declarations: [AddGameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
// @ts-ignore
export class AddGameModule { }
