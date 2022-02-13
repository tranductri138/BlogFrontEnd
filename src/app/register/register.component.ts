import { Component, OnInit } from '@angular/core';
import { IHash } from './hashMap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  value: string = "";
  answer: any;
  ngOnInit(): void {
    this.hashAll();
    this.test();
  }
  myHash: IHash = {}
  database = [
    {
      id: "abc",
      name: "tris dep zai"
    },
    {
      id: "abd",
      name: "tris dep zai"
    },
    {
      id: "ab1",
      name: "tris dep zai"
    },
    {
      id: "abs",
      name: "tris dep zai"
    },
    {
      id: "abb",
      name: "tris dep zai"
    },
    {
      id: "ab5",
      name: "tris dep zai"
    },
    {
      id: "ab6",
      name: "tris dep zai"
    },
  ]
  
  hashAll() {
    this.myHash[this.database[0].id] = 0;
    this.myHash[this.database[1].id] = 1;
    this.myHash[this.database[2].id] = 2;
    this.myHash[this.database[3].id] = 3;
    this.myHash[this.database[4].id] = 4;
    this.myHash[this.database[5].id] = 5;
    this.myHash[this.database[6].id] = 6;
    // this.myHash["abd"] = 2;
    // this.myHash["ab1"] = 3;
    // this.myHash["abs"] = 4; 
    // this.myHash["abb"] = 5;
    // this.myHash["ab5"] = 6; 
    // this.myHash["ab6"] = 7;
  }

  applyFilter(id: string): void {
    this.answer = this.database[this.myHash[id]];
    if (this.answer == undefined) {
      this.answer = "Ban da sai roi ko co trong Database";
    }
  }
  hashFunction(id: string) {
    this.myHash[id] = 0;
    this.in();
  }
  in() {

    console.log("day la vi tri 0", this.myHash["abc"] + "---", this.database[this.myHash["abc"]]);
    console.log("day la vi tri 2", this.myHash["ab1"] + "---", this.database[this.myHash["ab1"]]);
    console.log("day la vi tri 4", this.myHash["abb"] + "---", this.database[this.myHash["abb"]]);
    console.log("day la vi tri 6", this.myHash["ab6"] + "---", this.database[this.myHash["ab6"]]);
  }

  test() {
    const a = [1,2,3,5]
    const b = [0,1,4,2,3]
    b.forEach(x=>{
      a.forEach(x => {
        if(x==2) {
          console.log(x);
          return;
        }
      })
    })
  }
}
