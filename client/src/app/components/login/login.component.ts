import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(private _auth:AuthService, private _flash:NgFlashMessageService) { }

  ngOnInit() {
    this._flash.showFlashMessage({
      messages: ["Yah! i'm alive"], 
      dismissible: true, 
      timeout: 2000,
      type: 'danger'
    });
  }

  onLogin(){
    this._auth.loginUser(this.model).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    
  }

}
