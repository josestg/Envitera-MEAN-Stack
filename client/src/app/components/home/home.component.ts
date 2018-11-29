import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes:string[] = [
    'Quote1, Slide Me',
    'Quote2, Again',
    'Quote3, Repeat'
  ]
  writers:object[]=[
    {img:'./assets/img/g1.jpg',name:'Name 1',bio:'Bio 1'},
    {img:'./assets/img/g2.jpg',name:'Name 2',bio:'Bio 2'},
    {img:'./assets/img/g1.jpg',name:'Name 3',bio:'Bio 3'},
    {img:'./assets/img/g3.jpg',name:'Name 4',bio:'Bio 4'},
    {img:'./assets/img/g2.jpg',name:'Name 5',bio:'Bio 5'},
    {img:'./assets/img/g6.jpg',name:'Name 6',bio:'Bio 6'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
