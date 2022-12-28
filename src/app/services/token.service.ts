import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles:Array<string>=[];

  constructor() { }

  public setToken(token:string){
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken():any{ //string o null
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUser(user:string){
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY,user);
  }

  public getUser():any{ //string o null
    return sessionStorage.getItem(USER_KEY);
  }

  public setAuthorities(authorities:string[]){
    sessionStorage.removeItem(AUTHORITIES_KEY);
    sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  // public getAuthorities(){
  //   this.roles = [];
  //   if (sessionStorage.getItem(AUTHORITIES_KEY)){
  //     JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
  //       this.roles.push(authority.authority)        
  //     });
  //   }
  //   return this.roles;
  // }

  // public logOut():void{
  //   sessionStorage.clear();
  // }

  
}
