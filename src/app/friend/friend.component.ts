import { Component, OnInit } from '@angular/core';
import { Friend } from '../Model/Friend';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friend:string[]=['aaa','bbb','ccc','ddd','eee'];
  a:number=105;
  b:number=100;

  friends:Friend[]=[
    {friendname:'abc',email:'abc@gmail.com',mob:'154879',photo:'assets/Images/python.png'},
    {friendname:'def',email:'def@gmail.com',mob:'154555',photo:'assets/Images/sklearn.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
