import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendListComponent } from './friend-list/friend-list.component';
import { AboutComponent } from './about/about.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';

const routes: Routes = [
  { path: 'friends', component: FriendListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: FriendDetailComponent},
  { path: '', redirectTo: '/friends', pathMatch: 'full' },
  { path: '**', component: FriendListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
