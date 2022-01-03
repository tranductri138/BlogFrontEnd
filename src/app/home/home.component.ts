import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log('asdasdasd');

  }

  ngOnInit(): void {
    console.log('is herer');
  }
}
