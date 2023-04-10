import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './Components/Main/rooms/rooms.component';
import { HeaderTitleComponent } from './Components/Main/header-title/header-title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit{
 
  title = 'HotelManagement';
  // @ViewChild('main',{read:ViewContainerRef}) vcr!:ViewContainerRef; 
  @ViewChild('name',{static:true})name!:ElementRef;

  @ViewChildren(HeaderTitleComponent) headerChildren!:QueryList<HeaderTitleComponent>;

  ngAfterViewInit(): void {
    // let componentRef= this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.rooms.totalRooms=520
    // console.log(this.headerChildren)
    this.headerChildren.first.title="newtitle";
  }
  ngOnInit(): void {
      this.name.nativeElement.innerText='Hilton Hotels'
  }
}
