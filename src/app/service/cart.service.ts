import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  clear() {
    throw new Error('Method not implemented.');
  }
  cartItemList: any = [];
  total: number = 0;
  price: number = 0;
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(products: object) {
    this.cartItemList.push(products);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price * a.quantity;
    });
    return grandTotal;
  }
  removeCartItem(products: any) {
    this.cartItemList.map((a: any, index: number) => {
      if (products.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  getCartItems() {
    return this.cartItemList;
  }
  // deleteCart(cartId: number) {
  //   return this.http
  //     .delete('http://localhost:4200/cart/' + cartId)
  //     .subscribe((result) => {
  //       this.cartItemList.emit([]);
  //     });
  // }

  // emptyCart(){
  //   this.cartData =[];
  //   this.getCartItems();
  // }
}
