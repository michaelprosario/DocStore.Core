import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../core/responses/login.response';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  returnUrl: string = "";
  message: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.usersService.logout();
  }

  async handleLogin(): Promise<LoginResponse> {

    let loginResponse = await this.usersService.login(this.userName, this.password);
    if (loginResponse.loginValid) {
      this.message = "Login valid";
      this.router.navigate(["/home"]);
    } else {
      this.message = loginResponse.message;
    }

    return loginResponse;
  }

  handleRegister() {
    this.router.navigate(["/userSignup"]);
  }
}
