import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: Boolean = false;

  constructor(private authService: AuthService) { }

  onLogin(form:NgForm) {
    this.authService.onLogin(form.value.login, form.value.password);
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
