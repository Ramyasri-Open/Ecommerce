import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from '../../service/cart.service';
import { ProductsService } from '../../service/products.service';
import { listOfProducts } from '../../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productId: any;
  // filterCategory: any;
  // proList: any;
  isAddToCartDisabled = false;
  clickedItems: Map<number, boolean> = new Map<number, boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productService.list.find((x) => x.id == this.productId);
  }

  addToCart(product: any) {
    console.log(this.product);
    this.product.quantity = 1;
    this.clickedItems.set(product.id, true);
    this.cartService.addToCart(this.product);
  }
}
