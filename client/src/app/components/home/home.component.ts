import { HomeService } from './../../services/home.service';
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
  writers=[
    {img:'./assets/img/g1.jpg',name:'Name 1',status:'status 1'},
    {img:'./assets/img/g2.jpg',name:'Name 2',status:'status 2'},
    {img:'./assets/img/g1.jpg',name:'Name 3',status:'status 3'},
    {img:'./assets/img/g3.jpg',name:'Name 4',status:'status 4'},
    {img:'./assets/img/g2.jpg',name:'Name 5',status:'status 5'},
    {img:'./assets/img/g6.jpg',name:'Name 6',status:'status 6'}
  ]

  posts;

  constructor(private _hs:HomeService) { }

  ngOnInit() {
    this._hs.getPosts().subscribe(
      res => {this.posts= res;console.log(res)},
      err => console.log(err)
    )
    this._hs.getProfiles().subscribe(
      res=> {
        for(let i=0; i<res.length;i++){
          this.writers[i].name = res[i].user.name;
          this.writers[i].status = res[i].status;
        }
      }
    )
  }

}
