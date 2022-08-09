import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:string="Harshit";
  title = 'First Project Running';
  Role:string="GET"
  Today:Date=new Date();
}
