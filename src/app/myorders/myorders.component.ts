import { Component, OnInit } from '@angular/core';
import { order } from '../interface';
import { DatePipe } from '@angular/common';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
  providers: [DatePipe],
})
export class MyordersComponent implements OnInit {
  orderHis: order[] = [];
  productList: any;
  orderData: order[] | undefined;
  // orderData: any;
  // order: any;
  // allOrders: order[] = [];
  currentDate: string | null = '';
  constructor(
    private datePipe: DatePipe,
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((result) => {
      this.orderData = result;
      // this.orderData?.push(result);
      console.log(result);
    });
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  back() {
    this.router.navigate(['/cart']);
    this.cartService.removeAllCart();
  }
}
