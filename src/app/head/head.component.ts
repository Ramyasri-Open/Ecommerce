import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private router: Router, private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: string) => {
      this.totalItem = res.length;
    });
  }
  onCart() {
    this.router.navigate(['/cart']);
  }
  myOrders() {
    this.router.navigate(['/myOrders']);
  }
}
