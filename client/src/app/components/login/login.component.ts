import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(private _auth:AuthService,
     private _flash:NgFlashMessageService,
     private _router:Router) { }

  ngOnInit() {

  }

  onSubmit(){
    this._auth.loginUser(this.model).subscribe(
      res => {
        localStorage.setItem('token',res.token);
        this._router.navigate(['/profile']);
      },
      err => console.log(err)
    )
    
  }

}
