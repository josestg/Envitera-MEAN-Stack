import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/users/register";
  constructor(private _http:HttpClient) { }

  registerUser(user){
    //return api respon
    return this._http.post<any>(this._registerUrl,user);
  }
}
