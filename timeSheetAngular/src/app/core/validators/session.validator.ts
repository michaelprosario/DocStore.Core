import { AbstractValidator } from 'fluent-ts-validator';
import { Session } from '../entities/session';

export class SessionValidator extends AbstractValidator<Session> {
    constructor() {
        super();

        this.validateIfString((doc) => doc.track)
            .isNotEmpty()
            .withFailureMessage("Track is required");
        this.validateIfString((doc) => doc.title)
            .isNotEmpty()
            .withFailureMessage("Title is required");
        this.validateIfString((doc) => doc.description)
            .isNotEmpty()
            .withFailureMessage("Description is required");
        this.validateIfString((doc) => doc.speakerIdList)
            .isNotEmpty()
            .withFailureMessage("SpeakerIdList is required");
        this.validateIfString((doc) => doc.date)
            .isNotEmpty()
            .withFailureMessage("Date is required");
        this.validateIfString((doc) => doc.startTime)
            .isNotEmpty()
            .withFailureMessage("StartTime is required");
        this.validateIfString((doc) => doc.endTime)
            .isNotEmpty()
            .withFailureMessage("EndTime is required");
        this.validateIfString((doc) => doc.complexity)
            .isNotEmpty()
            .withFailureMessage("Complexity is required");

    }
}