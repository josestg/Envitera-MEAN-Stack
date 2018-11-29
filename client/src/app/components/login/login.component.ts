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

  }

  onSubmit(){
    this._auth.loginUser(this.model).subscribe(
      res => {
        localStorage.setItem('token',res.token);
      },
      err => console.log(err)
    )
    
  }

}
