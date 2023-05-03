import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class order {
  //   public orders: order[] = [];
  //   set newOrder(item: order) {
  //     this.orders.push(item);
  // }
}

// export interface Product {
//   total: any;
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: Category;
//   image: string;
//   rating: Rating;
//   quantity: number;
// }

// export enum Category {
//   Electronics = 'electronics',
//   Jewelery = 'jewelery',
//   MenSClothing = "men's clothing",
//   WomenSClothing = "women's clothing",
// }

// export interface Rating {
//   rate: number;
//   count: number;
// }
export interface order {
  id: number;
  date: number;
  title: string;
  quantity: number;
}
