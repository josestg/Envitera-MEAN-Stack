import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _postsUlr = "http://localhost:3000/api/posts";
  constructor(private _http:HttpClient) { }

  getPosts(){
    return this._http.get<any>(this._postsUlr);
  }
  getPost(id){
    return this._http.get<any>(this._postsUlr+'/'+id);
  }
}
