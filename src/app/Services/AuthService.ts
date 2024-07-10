import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings } from 'oidc-client';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userManager: UserManager;
  private _user: User;

  private _loginChangedSubject = new Subject<boolean>();
  public loginChanged = this._loginChangedSubject.asObservable();
  
  private get idpSettings() : UserManagerSettings {
    return {
      authority: environment.idpAuthority,
      client_id: environment.clientId,
      client_secret:"SuperSecretPassword",
      redirect_uri: `${environment.clientRoot}/signin-callback`,
      scope: environment.clientScopes,
      response_type: "code",
      post_logout_redirect_uri: `${environment.clientRoot}/signout-callback`,
      automaticSilentRenew: true,
      silent_redirect_uri: `${environment.clientRoot}/assets/silent-callback.html`
    }
  }
  constructor() { 
    this._userManager = new UserManager(this.idpSettings);
    this._userManager.events.addAccessTokenExpired(_ => {
      //this._loginChangedSubject.next(false);
      this.logout();
    });
  }

  public login = () => {
    return this._userManager.signinRedirect();
}

public isAuthenticated = (): Promise<boolean> => {
  return this._userManager.getUser()
  .then((user:any) => {
    this._user = user;
    return this.checkUser(user);
  })
}
private checkUser = (user : User): boolean => {
  return !!user && !user.expired;
}

public finishLogin = (): Promise<User> => {
  if(this._user){
    return new Promise(resolve => {
      resolve(this._user);
    });  
 }else{
  return this._userManager.signinRedirectCallback()
  .then((user:any) => {
    console.log(user);
    localStorage.setItem("sid",user.profile.sid);
    sessionStorage.setItem("sessionid",user.profile.sid);
    this._user = user;
    this._loginChangedSubject.next(this.checkUser(user));
    return user;
  })}
}

public logout = () => {
  this._userManager.signoutRedirect();
}
public finishLogout = () => {
  this._user = null;
  localStorage.removeItem("sid");
  sessionStorage.removeItem("sessionid");
  localStorage.removeItem("isLogoutIdealTime");
  localStorage.removeItem("settingIdleTime");
  this._loginChangedSubject.next(false);
  return this._userManager.signoutRedirectCallback();
}

public getAccessToken = (): Promise<string> => {
  return this._userManager.getUser()
    .then(user => {
       return !!user && !user.expired ? user.access_token : null;
  })
}

public checkIfUserInThisRole = (role : string): Promise<boolean> => {
  return this._userManager.getUser()
  .then(user => {
    return user?.profile['role'] && user?.profile['role'].indexOf(role)>-1;
  })
}

public checkIfUserIsDashboardAdmin = (): Promise<boolean> => {
  return this._userManager.getUser()
  .then(user => {
    return user?.profile['role'] && user?.profile['role'].indexOf('DashboardAdmin')>-1;
  })
}

public checkIfUserIsSuperAdmin = (): Promise<boolean> => {
  return this._userManager.getUser()
  .then(user => {
    return user?.profile['role'] && user?.profile['role'].indexOf('SuperAdmin')>-1;
  })
}

public getUser = (): Promise<User> => {
  return this._userManager.getUser()
  .then(user => {
    return user;
  })
}

}
