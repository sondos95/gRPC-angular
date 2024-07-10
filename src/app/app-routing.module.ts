import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { AppComponent } from './app.component';
import { SigninRedirectCallbackComponent } from './Shared/signin-redirect-callback/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './Shared/signout-redirect-callback/signout-redirect-callback.component';

const routes: Routes = [
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuardService],
   
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
