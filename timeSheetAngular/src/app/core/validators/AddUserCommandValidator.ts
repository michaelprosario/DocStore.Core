import { AbstractValidator, Severity } from "fluent-ts-validator";
import { AddUserCommand } from '../commands/add.user.command';

export class AddUserCommandValidator extends AbstractValidator<AddUserCommand> {

    constructor(private passwordConfirm: string) {
        super();
        this.validateIfString((c) => c.userName)
            .isNotEmpty()
            .withFailureMessage("User Name is required");
        this.validateIfString((c) => c.firstName)
            .isNotEmpty()
            .withFailureMessage("First Name is required");
        this.validateIfString((c) => c.lastName)
            .isNotEmpty()
            .withFailureMessage("Last Name is required");
        this.validateIfString((c) => c.password)
            .isNotEmpty()
            .withFailureMessage("Password is required"); 
    }
}
