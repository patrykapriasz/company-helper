import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authListenerSubscription: Subscription;
  userIsAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.onLogout()
  }

  ngOnInit(): void {
    //this.userIsAuthenticated = this.authService.getIsAuth();
    console.log("header: "+this.userIsAuthenticated);
    this.authListenerSubscription = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
    });
  }

  ngOnDestroy(): void {
    this.authListenerSubscription.unsubscribe();
  }
}
