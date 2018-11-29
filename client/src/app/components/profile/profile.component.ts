import { PostsService } from './../../services/posts.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model: any = {};
  profile;
  postsUser;
  numPosts = 0;
  numComments =0;
  numLikes =0;
  constructor(private _auth: AuthService,private _ps:PostsService,
    private _router:Router) { }

  ngOnInit() {
    this._auth.getProfile().subscribe(
      res=> {
        this.profile=res;console.log(res)
        this._ps.getPostByUser(this.profile.user._id).subscribe(
          res=>{
            this.postsUser= res;
            this.numPosts = this.postsUser.length;
            this.postsUser.forEach(e=>{
              this.numComments+= e.comments.length;
              this.numLikes+=e.likes.length;
              e.date = new Date(e.date.toString()).toDateString();
              e.text = e.text.substring(0,200)+'.....';
            })
            console.log(res)
          },
          err=>console.log(err)
        );
      },
      err=> console.log(err)
    )
    
  }

  onUpdateUser(){
    console.log(this.model);
    this._auth.updateProfile(this.model).subscribe(
      res => {console.log(res)
      },
      err=> console.log(err)
    )
  }

  onDelete(id){
    this._ps.deletePost(id).subscribe(
      res=>{console.log(res)},
      err=>{console.log(err)}
    )
  }


}
