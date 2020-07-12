import { AbstractValidator, Severity } from "fluent-ts-validator";
import { AppUser } from "../entities/app.user";

export class UserValidator extends AbstractValidator<AppUser> {

    constructor(private passwordConfirm: string) {
        super();
        this.validateIfString((user) => user.userName)
            .isNotEmpty()
            .withFailureMessage("User Name is required");
        this.validateIfString((user) => user.firstName)
            .isNotEmpty()
            .withFailureMessage("First Name is required");
        this.validateIfString((user) => user.lastName)
            .isNotEmpty()
            .withFailureMessage("Last Name is required");
        this.validateIfString(user => user.password)
            .isNotEmpty()
            .withFailureMessage("Password is required");
        this.validateIf(user => user.password)
            .isEqualTo(this.passwordConfirm)
            .withFailureMessage("Make sure passwords match");
        this.validateIfString((user) => user.email)
            .isNotEmpty()
            .isEmail()
            .withFailureMessage("Email is required and should be poperly formatted");
    }
}
