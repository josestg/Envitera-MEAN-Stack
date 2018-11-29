import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authservice :AuthService,
      private _router:Router){}

      canActivate():boolean {
        if(this._authservice.loggedIn()){
          return true;
        }else{
          this._router.navigate(['/login']);
          return false;
        }
      }
}
