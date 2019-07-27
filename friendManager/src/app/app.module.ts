import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './myMaterialModule/my-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { NavComponent } from './nav/nav.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FriendListComponent,
    NavComponent,
    FriendDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
