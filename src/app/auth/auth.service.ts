import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModel } from './auth.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {

  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated: boolean = false;
  private tokenTimer: any;

  constructor(private http: HttpClient, private router: Router){

  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  onLogin(login: string, password: string) {
    const authModel: AuthModel = {
      login: login,
      password: password
    }
    this.http.post<{token: string,expiresIn: number}>(environment.apiUrl+'/login', authModel).subscribe(response=>{
      const token = response.token;
      this.token = token
      if(token) {
        const expiresInDurdation = response.expiresIn;
        this.setAuthTimer(expiresInDurdation);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDurdation * 1000);
        this.saveAuthData(token, expirationDate)
        this.router.navigate(['/dashboard']);
      }

    });
  }

  onLogout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(["/login"]);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
  }

  autoAuthUser() {
    const authinformation = this.getAuthData();
    console.log(authinformation);
    if(!authinformation){
      return;
    }
    const now = new Date();
    const expiresIn = authinformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0) {
      this.token = authinformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn/1000);
      this.authStatusListener.next(true);
    }
   }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
              this.onLogout();
            }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    console.log(expirationDate)
    if(!token || !expirationDate) {
      return;
    }

    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

}
