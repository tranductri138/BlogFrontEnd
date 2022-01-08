import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [
    {
      name: "tao la tri dep zai 4",
      image: "day la anh cua tao"
    },
    {
      name: "tao la tri dep zai 3",
      image: "day la anh cua tao"
    },
    {
      name: "tao la tri dep zai 2",
      image: "day la anh cua tao"
    },
  ];
  post2: Post[] = []; 
  stories: Story[] = [
    { name: "BubbleSort" },
    { name: "InsertionSort" },
    { name: "MergeSort" },
    { name: "TimSort" },
  ]
  constructor() {};
  createObj() {
    let obj:Post = {
      name: "tao la tri dep zai",
      image: "day la anh cua tao"
    }
    for(let i = 0 ; i <40 ; i++) {
      this.post2.push(obj)
    } 
  }
  numberArray :number[] =  [7,21,47,85,1,4,35,10,3,2,6,14,8,5,16 ,0]
  
  ngOnInit(): void {
    // this.createObj()
  }
  ar1() {
     const numberArray1 :number[] = [7,21,47,85,1,4,35,10,3,2,6,14,8,5,16 ,0]
     return numberArray1;
  }
  reset(){
    this.numberArray = this.ar1() 
  }
  fillterByMe(sort:Story) {
    const nameSort:string = sort.name
    switch (nameSort) {
      case "BubbleSort" :
      this.bubbleSort(this.numberArray);
      break;
      case "InsertionSort" :
      this.insertionSort(this.numberArray);
      break;
      case "MergeSort" :
      this.mergeSort(this.posts);
      break;
    }
  }
  bubbleSort(a :number[]){
    const size = a.length;
    for(let i = 0 ; i <size -1; i++) {
      let swaped:boolean = false;
      for( let j = 0 ; j < size - i -1 ; j++){
          if(a[j] > a[j+1]) {
            [a[j], a[j+1]] =[a[j+1],a[j]];
            swaped = true
          }
      }
      if(!swaped) break
    }
    this.numberArray = a;
  }
  insertionSort(a :number[]){
    const size = a.length;
    for(let i = 1 ; i <size  ;i++) {
      let ai = a[i];
      let j  = i-1;
      while (j >= 0 && a[j] > ai) {
        a[j+1] = a[j];
        j--;
      }
      a[j+1] = ai;
    }
  }
  mergeSort(posts :Post[]) {

  }

}
export interface Post {
  name: string;
  image: string;
}
export interface Story {
  name: string;
}