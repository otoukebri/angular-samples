import { User } from './../model/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Store the active user state
  private activeUser: User;

  constructor() { }

  getActiveUser() {
    // We'll return the active user or undefined if no active user
    // The cast to Readonly<User> here is used to maintain immutability
    // in our stored state
    return this.activeUser as Readonly<User>;
  }

  setActiveUser(user: User) {
    this.activeUser = user;
  }
}
