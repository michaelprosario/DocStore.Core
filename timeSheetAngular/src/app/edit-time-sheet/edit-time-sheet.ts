import { AbstractValidator } from "fluent-ts-validator";

export class TimeSheet {
  public id: string;
  public ownerId: string;
  public weekEnding: string;
  public notes: string;
}

export class TimeSheetValidator extends AbstractValidator<TimeSheet> {
    constructor() {
        super();

        this.validateIfString((doc) => doc.ownerId)
            .isNotEmpty()
            .withFailureMessage("OwnerId is required");
        this.validateIfString((doc) => doc.weekEnding)
            .isNotEmpty()
            .withFailureMessage("WeekEnding is required");
    }
}
