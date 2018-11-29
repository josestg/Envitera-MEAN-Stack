import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _postsUlr = "http://localhost:3000/api/posts";
  private _likeUrl = "http://localhost:3000/api/posts/like";
  private _postUser = "http://localhost:3000/api/posts/user";
  constructor(private _http:HttpClient) { }

  getPosts(){
    return this._http.get<any>(this._postsUlr);
  }
  getPost(id){
    return this._http.get<any>(this._postsUlr+'/'+id);
  }

  likePost(id){
    return this._http.post<any>(this._likeUrl,id);
  }

  getPostByUser(id){
    return this._http.get<any>(this._postUser+'/'+id);
  }

  deletePost(id){
    return this._http.delete<any>(this._postsUlr+'/'+id);
  }


}
