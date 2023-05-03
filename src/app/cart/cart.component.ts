import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { listOfProducts } from '../service/products.service';
import { OrderService } from '../service/order.service';
import { order } from '../interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: any = [];
  pro: listOfProducts[] = [];
  grandTotal: number = 0;
  cartItems = [];
  orderData: order[] | undefined;

  // cartData: listOfProducts[] | undefined;
  constructor(
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      // this.cartData = res;
      this.product = res;
      // console.log(res, 'cart');
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.orderService.getOrderHistory().subscribe((res: any) => {
      this.orderData = res;
    });

    // this.cartData?.forEach((item) => {
    //   setTimeout(() => {
    //   item.id && this.cartService.deleteCart(item.id);

    //   }, 500);
    // });
  }
  removeItem(item: object) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
  increaseItem(item: any) {
    if (item.quantity != 5) {
      item.quantity += 1;
      this.grandTotal += item.price;
      // this.grandTotal = this.cartService.getTotalPrice();
    }
  }
  decreaseItem(item: any) {
    if (item.quantity != 1) {
      item.quantity -= 1;
      this.grandTotal -= item.price;
    }
  }

  shopMore() {
    this.router.navigate(['/product']);
  }

  checkOut() {
    const cartItems = this.cartService.getCartItems();
    this.orderService.updateOrderHistory(cartItems);
    this.router.navigate(['/myOrders']);
  }
}
