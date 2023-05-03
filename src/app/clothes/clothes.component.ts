import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css'],
})
export class ClothesComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
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
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      this.productList;
    });
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
  allProducts() {
    this.router.navigate(['/']);
  }
}
