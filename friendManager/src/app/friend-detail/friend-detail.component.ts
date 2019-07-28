import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Friend } from '../model/friend';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.scss'],
  animations: [
    trigger('myAni2', [
      transition('* => *', [

        query('.card', style({ opacity: 0 }), { optional: true }),

        query('.card', [
          animate('0.6s ease-in-out', keyframes([
            style({ opacity: 0.5, transform: 'translateY(-25px)' }),
            style({ opacity: 0.8, transform: 'translateY(15px)' }),
            style({ opacity: 1, transform: 'translateY(-10px)' }),
            style({ transform: 'translateY(5px)' }),
            style({ transform: 'translateY(0px)' }),
          ]))], { optional: true })
      ])
    ])

  ]
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
