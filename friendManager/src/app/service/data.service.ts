import { Injectable } from '@angular/core';
import { Friend } from '../model/friend';

const friendList: Friend[] = [
  { id: 1, name: 'Seyoun', address: '33 Worthy Street, Ilam' },
  { id: 2, name: 'Luke', address: '1 Cardinal Drive, Hilmorton' },
  { id: 3, name: 'Steve', address: '1 Warren Cres, Hillmorton' },
  { id: 4, name: 'Jason', address: 'Rolleston' }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  friend: Friend;

  constructor() { }

  getFriends() {
    return friendList;
  }

  getFriend(id: number): Friend {
    friendList.map((x) => {
      if (x.id == id) {
        this.friend = x;
      }
    })

    return this.friend;
  }
}
