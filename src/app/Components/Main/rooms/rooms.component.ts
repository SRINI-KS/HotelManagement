import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Room, RoomDetails } from '../Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsComponent{

  
  selectedRoom!:RoomDetails;

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
      checkOutTime:new Date('31-Mar-2021'),
      rating:4
    },
    {
      roomNum:2,
      roomType:'Deluxe Room',
      amenities:'Air conditioner, free Wi-Fi , Tv',
      price:1500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3h5Ilxw2tfn7tiLlu079mOeAcPB12dgqie81MZ_ZPA&usqp=CAU&ec=48665701",
      checkInTime:new Date('30-Mar-2021'),
      checkOutTime:new Date('31-Mar-2021'),
      rating:4.4
    },
    {
      roomNum:3,
      roomType:'Deluxe Room',
      amenities:'Air conditioner, free Wi-Fi , Tv',
      price:1500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3h5Ilxw2tfn7tiLlu079mOeAcPB12dgqie81MZ_ZPA&usqp=CAU&ec=48665701",
      checkInTime:new Date('30-Mar-2021'),
      checkOutTime:new Date('31-Mar-2021'),
      rating:5
    },
    {
      roomNum:4,
      roomType:'Deluxe Room',
      amenities:'Air conditioner, free Wi-Fi , Tv',
      price:1500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3h5Ilxw2tfn7tiLlu079mOeAcPB12dgqie81MZ_ZPA&usqp=CAU&ec=48665701",
      checkInTime:new Date('30-Mar-2021'),
      checkOutTime:new Date('31-Mar-2021'),
      rating:3.5
    },
    {
      roomNum:5,
      roomType:'Deluxe Room',
      amenities:'Air conditioner, free Wi-Fi , Tv',
      price:1500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3h5Ilxw2tfn7tiLlu079mOeAcPB12dgqie81MZ_ZPA&usqp=CAU&ec=48665701",
      checkInTime:new Date('30-Mar-2021'),
      checkOutTime:new Date('31-Mar-2021'),
      rating:2
    }
  ]
  select(data:RoomDetails){
    this.selectedRoom=data
    console.log("data from parent"+this.selectedRoom)
  }
  addRoom(){
    let newRoom:RoomDetails={
      roomNum:6,
      roomType:'Deluxe Room',
      amenities:'Air conditioner, free Wi-Fi , Tv',
      price:1500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3h5Ilxw2tfn7tiLlu079mOeAcPB12dgqie81MZ_ZPA&usqp=CAU&ec=48665701",
      checkInTime:new Date('30-Mar-2021'),
      checkOutTime:new Date('31-Mar-2021'),
      rating:2

  }
  this.roomsDetails=[...this.roomsDetails,newRoom];
}
}
