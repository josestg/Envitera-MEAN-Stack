import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData={};
  constructor(private _auth : AuthService) { }

  ngOnInit() {
  }

  onRegister(){
    this._auth.registerUser(this.userData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
