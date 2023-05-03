import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  filterCategory: any;
  disable!: boolean;
  // product: any;
  // productId: any;
  // clicked?: boolean;
  clickedItems = new Map<number, boolean>();
  constructor(
    private api: ApiService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit() {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.clickedItems.set(item.id, true);
    // this.productList.quantity = 1;
    // this.addToCartClicked = true;
    console.log(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
    this.productList.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price });
    });
  }
  selectFashions() {
    this.router.navigate(['/clothes']);
  }
  allProducts() {
    this.router.navigate(['/product']);
  }
}
