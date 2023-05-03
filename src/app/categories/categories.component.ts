import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ProductsComponent } from '../products/products.component';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public filterCategory: any;
  categories: Category[] = [
    { value: 'clothes-0', viewValue: 'Clothes' },
    { value: 'footwear-1', viewValue: 'Footwear' },
    { value: 'electronics-2', viewValue: 'Electronics' },
  ];
  constructor(private router: Router) {}
  public productList: any;

  ngOnInit() {
    // this.api.getProduct().subscribe((res) => {
    //   this.productList = res;
    // });
    // this.api.getProduct().subscribe((res) =>
    // {
    //   this.productList = res;
    //   this.filterCategory = res;
    //   this.productList.forEach((a: any) => {
    //     if (
    //       a.category === "women's clothing" ||
    //       a.category === "men's clothing"
    //     ) {
    //       a.category = 'fashion';
    //     }
    //     Object.assign(a, { quantity: 1, total: a.price });
    //   });
    //   (this.productList);
    // });
    // this.api.getProduct().subscribe((res) => {
    //   this.productList = res;
    // });
  }

  // filter(category: string) {
  //   this.filterCategory = this.productList.filter((a: any) => {
  //     if (a.category == category || category == '') {
  //       return a;
  //     }
  //   });
  // }
  allProducts() {
    this.router.navigate(['/product']);
  }

  selectFashions() {
    this.router.navigate(['/clothes']);
  }
}
