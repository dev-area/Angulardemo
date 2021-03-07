import { Component } from '@angular/core';
import {MathTools} from "./Tools/MathTools";
import {Customer} from "./Customer";
import {Item} from "./Item";
import {Question} from "./Question";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resStr: string = "";
  title = 'app';
  num1:number = 0;
  num2:number = 0;
  res:number =0;
  abc:string = "hello";
  names:string[] =['avi','dani','rina','dina'];
  myclass:string = 's1';
  qs:Question[] = [];
  bl:boolean = true;
  constructor() {
    let size=9;
    this.ar = Array(size).fill(0).map((x,i)=>i);
  }
  ar:number[] = [];

  gen()
  {
    this.qs=new Array(this.res);
    for(let i=0;i<this.res;i++)
      this.qs[i]=new Question(MathTools.getNum(100),MathTools.getNum(100));
  }

  checkexam()
  {
    let count=0;
    for(let i=0;i<this.res;i++)
      if(this.qs[i].num1 + this.qs[i].num2 == this.qs[i].res)
        count++;
    alert("count:" + count);
  }
  style1 = {
    'color':'green',
    'font-size': '30px'
  }
  Item: number = 0;

  Items: Item[] = [
    {
      name : 'liran',
      id: 100
    },
    {
      name : 'avi',
      id: 200
    },
    {
      name : 'dani',
      id: 300
    },

  ];

  v1:string = 'alert-danger';

  initcust()
  {
    this.customers = new Array(5);

    this.customers[0]=new Customer(10,'dd','gg');
  }
  customers:Customer[] = [
    {
      'Id':100,
      'Name':'avi',
      'City':'haifa'
    },
    {
      'Id':200,
      'Name':'dana',
      'City':'aco'
    },
    {
      'Id':300,
      'Name':'yosi',
      'City':'haifa'
    },

  ];
  fn(){
    let n=MathTools.getNum(100);
    this.num1 = n;
    this.num2 = MathTools.getNum(100);
    //alert("num:"+n);
  }

  f3()
  {
    let c=new Customer(20,'eli','haifa');

    return "hi!!!";
  }
  check()
  {
    if(this.num1 + this.num2 == this.res)
      this.resStr = "Correct!";
    else
      this.resStr = "Wrong!";
  }
  kp(ev:any)
  {
    console.log("kp:" + ev.key);
  }
}
