import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MMOComponent} from "./mmo.component";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";


const routes: Routes = [
  {
    path: '',
    component: MMOComponent,
  },
];

@NgModule({
  declarations: [MMOComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, FlexLayoutModule, MatButtonModule]

})
// @ts-ignore
export class MmoModule { }
