import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _postsUlr ="http://localhost:3000/api/posts";
  private _profileAllUrl ="http://localhost:3000/api/profiles/all";

  constructor(private _http:HttpClient) { }

  getPosts(){
    return this._http.get<any>(this._postsUlr);
  }
  getProfiles(){
    return this._http.get<any>(this._profileAllUrl);
  }
}
