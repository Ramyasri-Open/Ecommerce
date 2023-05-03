import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { order } from '../interface';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService implements OnInit {
  private orderHistoryList = new BehaviorSubject<any>([]);
  orderList: any = [];
  orderData: order[] | undefined;
  constructor(private http: HttpClient, private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((result: any) => {
      this.orderData = result;
    });
  }
  getOrderHistory() {
    return this.orderHistoryList.asObservable();
  }
  updateOrderHistory(order: any) {
    let orderHistory = this.orderHistoryList.getValue();
    orderHistory.push(order);
    this.orderHistoryList.next(orderHistory);
  }
  // removeOrder(products: any) {
  //   this.orderList.map((a: any, index: any) => {
  //     if (products.id === a.id) {
  //       this.orderList.splice(index, 1);
  //     }
  //   });
  //   this.orderHistoryList.next(this.orderList);
  // }
  // saveOrders(orderItem: order[]): Observable<any> {
  //   return this.http.post<order>(
  //     'https://fakestoreapi.com/products/order',
  //     orderItem
  //   );
  // }
  // getOrders(): Observable<order[]> {
  //   return this.http.get<order[]>('https://fakestoreapi.com/products/order');
  // }
  // removeOrders() {
  //   this.orderList = [];
  //   this.orderHistoryList.next(this.orderList);
  // }
}
