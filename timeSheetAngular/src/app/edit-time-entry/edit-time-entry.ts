import { AbstractValidator } from "fluent-ts-validator";

export class TimeEntry {
  public id: string = "";
  public timeSheetId: string;
  public projectCode: string;
  public workItemId: string;
  public task: string;
  public startTime: string;
  public endTime: string;
  public entryDate: string;
  public hours: number;
  public ownerId: string;
  public notes: string;
}

export class TimeEntryValidator extends AbstractValidator<TimeEntry> {
    constructor() {
        super();

        this.validateIfString((doc) => doc.timeSheetId)
            .isNotEmpty()
            .withFailureMessage("TimeSheetId is required");
        this.validateIfString((doc) => doc.projectCode)
            .isNotEmpty()
            .withFailureMessage("ProjectCode is required");
        this.validateIfString((doc) => doc.workItemId)
            .isNotEmpty()
            .withFailureMessage("WorkItemId is required");
        this.validateIfString((doc) => doc.startTime)
            .isNotEmpty()
            .withFailureMessage("StartTime is required");
        this.validateIfString((doc) => doc.endTime)
            .isNotEmpty()
            .withFailureMessage("EndTime is required");
        this.validateIfString((doc) => doc.entryDate)
            .isNotEmpty()
            .withFailureMessage("EntryDate is required");
        this.validateIfString((doc) => doc.ownerId)
            .isNotEmpty()
            .withFailureMessage("OwnerId is required");
    }
}
