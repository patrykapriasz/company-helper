import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private authListenerSubscription: Subscription;
  userIsAuthenticated: boolean = false;

  constructor(private authService: AuthService){}

  onLogout() {
    this.authService.onLogout()
  }

  ngOnInit(): void {
    this.authService.autoAuthUser();


    this.userIsAuthenticated = this.authService.getIsAuth();
    console.log("header: "+this.userIsAuthenticated);
    this.authListenerSubscription = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
    });
  }
  title = 'company-helper-prs';

  ngOnDestroy(): void {
    this.authListenerSubscription.unsubscribe();
  }
}
