import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService';

@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }
  ngOnInit(): void {
    this._authService.finishLogin()
    .then(_ => {
       debugger
      if(localStorage.getItem("currentRoute"))
      {
        this._router.navigate([localStorage.getItem("currentRoute")], { replaceUrl: true });
      }
      else
      {
        this._router.navigate(['/'], { replaceUrl: true });
      }
      
    })
  }
}
