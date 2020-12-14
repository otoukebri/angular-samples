import { UserService } from './user.service';
import { User } from './../model/User';
import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let orderService: OrderService;
  const userServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['getActiveUser'])


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: userServiceSpy
        }
      ]
    });

    orderService = TestBed.inject(OrderService);
  });

  it("order should be created correctly", () =>{

    // arrange
    const product =  {
      id : 'product',
      name : 'product',
      cost : 100
    };

    const user : User = {
      id : 'test',
      name : 'test'
    };
    userServiceSpy.getActiveUser.and.returnValue(user);

    // act
    const createdOrder = orderService.createOrder(product);

    // asset
    expect(createdOrder.product.id).toEqual('product');
    expect(createdOrder.user.id).toEqual('test');
    expect(userServiceSpy.getActiveUser).toHaveBeenCalled();
  });

});
