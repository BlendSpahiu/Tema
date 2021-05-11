import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../_services/token-storage.service";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

data = [];
currentUsername  = this.storage.getUser().username
  constructor(private storage: TokenStorageService, private service: OrdersService) { }

  ngOnInit(): void {
  this.storage.getUser()
    this.getMyOrders();
  }

      getMyOrders(){
        this.service.getOrders().subscribe((result)=>{
          result.forEach( obj => {
            if (obj.username == this.currentUsername){
              this.data.push(obj);
              console.log(this.data)
            }
          })
        })
      }
}
