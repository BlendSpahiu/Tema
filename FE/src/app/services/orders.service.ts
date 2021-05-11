import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/orders';
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class OrdersService {

  constructor( private  http: HttpClient) { }

  getOrders(): Observable<any> {
  return this.http.get(baseUrl)
  }
  postOrder(data){
    return  this.http.post(baseUrl, data);
  }
}
