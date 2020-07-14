import { AbstractValidator, Severity } from "fluent-ts-validator";
import { TimeSheet } from 'src/app/edit-time-sheet/edit-time-sheet';

export class TimeSheetValidator extends AbstractValidator<TimeSheet> {

    constructor() {
        super();
        this.validateIfString((c) => c.id).isNotEmpty();
        this.validateIfString((c) => c.ownerId).isNotEmpty();
        this.validateIfString((c) => c.weekEnding).isNotEmpty();
    }
}
