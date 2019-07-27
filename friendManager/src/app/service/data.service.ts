import { Injectable } from '@angular/core';
import { Friend } from '../model/friend';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  address: string;

  constructor(private http: HttpClient) { }

  getFriends() {
    return friendList;
  }

  getFriend(id: number): Friend {
    friendList.map((x) => {
      if (x.id == id) {
        this.friend = x;
        this.address = x.address;
      }
    })

    return this.friend;
  }

  addCoordinate(address) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(address) + '&key=' + environment.googleApiKey)
  }
}
