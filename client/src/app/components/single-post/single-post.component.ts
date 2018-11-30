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
  model ={};
  constructor(private _postservice:PostsService ,
    private _auth:AuthService,private _ar:ActivatedRoute) { 
    this._ar.params.subscribe(p=> {
      this.param$ = p.id.toString()
      console.log(this.param$)
    }) 
  }

  ngOnInit() {
    this._postservice.getPost(this.param$).subscribe(
      res=> {this.post=res;

        this.comments = res.comments;
        this.comments.map(e=> e.date=new Date(e.date.toString()).toDateString())
        this.post.date = new Date(this.post.date.toString()).toDateString()

      },
      err=>console.log(err)
    )
  }

  onComment(){
    console.log(this.param$,this.model);
    this._postservice.addComment(this.param$,this.model).subscribe({
      res=>console.log(res),
      err=>console.log(err)
    })
  }

}
