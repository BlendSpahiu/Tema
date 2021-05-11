import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {RPGComponent} from "./rpg.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


const routes: Routes = [
  {
    path: '',
    component: RPGComponent,
  },
];

@NgModule({
  declarations: [RPGComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MatCardModule, MatButtonModule]

})
// @ts-ignore
export class RpgModule { }
