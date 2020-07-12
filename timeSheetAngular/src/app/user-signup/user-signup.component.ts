import { Component, OnInit, ViewChild } from '@angular/core';
import { AddUserCommand } from '../core/commands/add.user.command';
import { UserValidator } from '../core/validators/user.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../core/services/users.service';
import { IGenericResponse } from '../core/responses/generic.response';
import { InfoBarComponent } from '../info-bar/info-bar.component';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  @ViewChild(InfoBarComponent, {static: false}) infoBar: InfoBarComponent;
  private command: AddUserCommand;
  private confirmPassword: string = "";
  private errors: string[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
  }

  ngOnInit() {
    this.command = new AddUserCommand();
  }

  formValid(): boolean {
    const validator = new UserValidator(this.confirmPassword);
    const result = validator.validate(this.command.userToAdd);
    this.errors = [];

    if (!result.isValid()) {
      this.errors = result.getFailureMessages();
      this.infoBar.displayErrors(this.errors);
      return false;
    } else {
      return true;
    }
  }

  onRegisterHandler() {
    if (this.formValid()) {
      this.usersService.add(this.command).then(data => {
        const response = data as unknown as IGenericResponse;
        if (response.code === 200) {
          this.infoBar.displayInfo("You are registered");
        } else {
          this.handleError(data);
        }
      }).catch(data => {
        this.handleError(data);
      });
    }
  }

  private handleError(data: any) {
    const response = data as IGenericResponse;
    if (data.errors.length > 0) {
      this.errors = data.errors;
    }
    else {
      this.errors = [data.message];
    }

    this.handleError(this.errors);
  }
}
