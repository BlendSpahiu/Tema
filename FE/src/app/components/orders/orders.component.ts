import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = new Array();
  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.orderService.getOrders().subscribe((result)=>{
      this.orders = result
      console.log(result);
    })
  }

}
