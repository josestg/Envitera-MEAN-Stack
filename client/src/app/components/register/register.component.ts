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
      res => {  
        console.log(res);
          localStorage.setItem('token',res.token);
          this._router.navigate(['/profile'])
      },
      err => console.log(err)
    )
  }

}
