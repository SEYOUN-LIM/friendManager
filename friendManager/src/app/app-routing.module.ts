import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendListComponent } from './friend-list/friend-list.component';
import { AboutComponent } from './about/about.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';

const routes: Routes = [
  { path: '', component: FriendListComponent },
  { path: 'friends', component: FriendListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: FriendDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
