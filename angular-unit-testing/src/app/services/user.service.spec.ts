import { User } from './../model/User';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set active user correctly', () => {
    // arrange
    const user: User = {
      id: 'test',
      name: 'test'
    };
    service.setActiveUser(user);


    // act
    const activeUser = service.getActiveUser();

    // asset
    expect(activeUser.id).toEqual('test');

  });
});
