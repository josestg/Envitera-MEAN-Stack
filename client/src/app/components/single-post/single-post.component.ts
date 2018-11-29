import { AuthService } from './../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  param$ :string;
  post;
  comments;
  constructor(private _postservice:PostsService ,
    private _auth:AuthService,private _ar:ActivatedRoute) { 
    this._ar.params.subscribe(p=> this.param$ = p.id.toString()) 
  }

  ngOnInit() {
    this._postservice.getPost(this.param$).subscribe(
      res=> {this.post=res;
        this.comments = res.comments;
        this.comments.map(e=> e.date=new Date(e.date.toString()).toDateString())
        this.post.date = new Date(this.post.date.toString()).toDateString()
        console.log(this.post)
      },
      err=>console.log(err)
    )
  }

}
