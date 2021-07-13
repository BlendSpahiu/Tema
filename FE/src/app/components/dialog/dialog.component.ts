import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { ToastrService } from 'ngx-toastr';
import {OrdersService} from "../../services/orders.service";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    gameDetails: any;

  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private orders: OrdersService,
              private localStorage: TokenStorageService, private toastr: ToastrService) {

    console.log(this.data);
    this.gameDetails = data._game;
  }
    buy(){

      const order = {
        username: this.localStorage.getUser().username,
        title: this.gameDetails.title,
        description: this.gameDetails.description,
        published: this.gameDetails.published,
        price: this.gameDetails.price,
        filePath: this.gameDetails.filePath,
        category: this.gameDetails.categories
      }


        this.orders.postOrder(order).subscribe(() => {
          console.log(order)
         
        });
           
          this.dialogRef.close();
          this.dialogRef.afterClosed().subscribe(log => {
            this.toastr.success("Bought Successfully!", this.gameDetails.title);
          });
    }
  ngOnInit(): void {
  }

}
