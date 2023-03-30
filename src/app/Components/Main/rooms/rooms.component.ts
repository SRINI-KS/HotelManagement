import { Component } from '@angular/core';
import { Room, RoomDetails } from '../Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  rooms:Room={
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomsDetails:RoomDetails[]=[
    {
      roomNum:1,
      roomType:'Deluxe Room',
      amenities:'Air conditioner, free Wi-Fi , Tv',
      price:1500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3h5Ilxw2tfn7tiLlu079mOeAcPB12dgqie81MZ_ZPA&usqp=CAU&ec=48665701",
      checkInTime:new Date('30-Mar-2021'),
      checkOutTime:new Date('31-Mar-2021')
    }
  ]
}
