import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Friend } from '../model/friend';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.scss']
})
export class FriendDetailComponent implements OnInit {

  id: number;
  friend: Friend;

  lat: number = 0;
  lng: number = 0;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.friend = this.data.getFriend(this.id);
  }

  ngAfterContentInit() {
    this.data.addCoordinate(this.friend.address).subscribe(x => {
      this.lat = x['results'][0].geometry.location.lat;
      this.lng = x['results'][0].geometry.location.lng;
    });
  }

}
