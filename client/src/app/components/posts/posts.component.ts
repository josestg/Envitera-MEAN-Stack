import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts= [];
  constructor(private _postservice:PostsService) { }

  ngOnInit() {
    this._postservice.getPosts()
      .subscribe(
        res => this.posts = res,
        err => console.log(err)
      );
  }


}
