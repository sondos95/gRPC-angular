import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../Services/AuthService';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
     
    var noLogin= false;
    if(route.data[0] != undefined){
      noLogin= route.data[0].noLogin;
    } 
    if (noLogin) {
       return true;
    }else{
       
      return this.checkIsUserAuthenticated();
    }
  }
  private checkIsUserAuthenticated() {
     
    return this._authService.isAuthenticated()
      .then(res => {
        return res ? true : this.redirectToLogin();
      });
  }
  private redirectToLogin(){
    this._authService.login();
    return false;
  }
  
}