import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/users/register";
  private _loginUrl ="http://localhost:3000/api/users/login";
  private _current = "http://localhost:3000/api/users/current";
  

  constructor(private _http:HttpClient) { }

  registerUser(user){
    //return api respon
    return this._http.post<any>(this._registerUrl,user);
  }

  loginUser(user){
    //return api respon
    return this._http.post<any>(this._loginUrl,user);
  }

  getUserCurrent(){
    return this._http.get<any>(this._current);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
