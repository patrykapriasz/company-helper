import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private authListenerSubscription: Subscription;
  userIsAuthenticated: boolean = false;

  constructor(private authService: AuthService, private socketService: SocketService){}

  onLogout() {
    this.authService.onLogout()
  }

  ngOnInit(): void {
    this.authService.autoAuthUser();

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubscription = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
    });

    this.socketService.setupSocketConnection();
  }
  title = 'company-helper-prs';

  ngOnDestroy(): void {
    this.authListenerSubscription.unsubscribe();
  }
}
