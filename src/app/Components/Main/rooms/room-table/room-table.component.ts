import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomDetails } from '../../Room';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent implements OnInit , OnChanges{
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
  }
  @Input() roomsDetails:RoomDetails[]=[];
  @Output() selectedRoom=new EventEmitter<RoomDetails>();


  selectRoom(roomData:RoomDetails){
    this.selectedRoom.emit(roomData);
  }
}
