import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './Components/Main/rooms/rooms.component';
import { RoomTableComponent } from './Components/Main/rooms/room-table/room-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
