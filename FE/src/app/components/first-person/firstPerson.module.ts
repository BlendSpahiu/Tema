import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FirstPersonComponent} from "./first-person.component";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {DialogComponent} from "../dialog/dialog.component";


const routes: Routes = [
  {
    path: '',
    component: FirstPersonComponent,
  },
];


@NgModule({
  declarations: [FirstPersonComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, FlexLayoutModule, MatButtonModule],
  entryComponents: [DialogComponent]

})
// @ts-ignore
export class firstPersonModule { }
