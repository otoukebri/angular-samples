import { UserService } from './user.service';
import { Order } from './../model/Order';
import { Product } from './../model/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly userService: UserService) { }

  createOrder(product: Product): Order {
    return {
      id: Date.now().toString(),
      user: this.userService.getActiveUser(),
      product
    };
  }
}
