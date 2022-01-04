import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [
    {
      name: "tao la tri dep zai",
      image: "day la anh cua tao"
    },
    {
      name: "tao la tri dep zai",
      image: "day la anh cua tao"
    },
    {
      name: "tao la tri dep zai",
      image: "day la anh cua tao"
    },
  ];
  stories: Story[] = [
    { name: "tridepzai" },
    { name: "tridepzai" },
    { name: "tridepzai" },
  ]
  constructor() {
  }

  ngOnInit(): void {
    console.log('is herer');
  }
}
export interface Post {
  name: string;
  image: string;
}
export interface Story {
  name: string;
}
