import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  faFlask = faFlask;

  users: User[] = [];
  private usersSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers();
    this.usersSubscription = this.userService.getusersUpdateListener().subscribe((users:User[])=>{
      console.log(users);
      this.users = users;
    });
  };

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
