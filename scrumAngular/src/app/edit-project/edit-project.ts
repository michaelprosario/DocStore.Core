import { AbstractValidator } from "fluent-ts-validator";

export class Project {
  public id: string = "";
  public name: string = "";
  public description: string = "";
}

export class ProjectValidator extends AbstractValidator<Project> {
    constructor() {
        super();

        this.validateIfString((doc) => doc.name)
            .isNotEmpty()
            .withFailureMessage("Name is required");
    }
}
