import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './Components/Main/rooms/rooms.component';
import { RoomTableComponent } from './Components/Main/rooms/room-table/room-table.component';
import { HeaderTitleComponent } from './Components/Main/header-title/header-title.component';
import { ContainerComponent } from './Components/Main/container/container.component';
import { EmployeesComponent } from './Components/Main/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomTableComponent,
    HeaderTitleComponent,
    ContainerComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
