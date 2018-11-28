import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {};
  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this._auth.loginUser(this.userData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    
  }

}
