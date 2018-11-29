import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  model: any = {};

  onSubmit() {
    this._auth.registerUser(this.model).subscribe(
      res => this._router.navigate(['login']),
      err => console.log(err)
    )
  }

}
