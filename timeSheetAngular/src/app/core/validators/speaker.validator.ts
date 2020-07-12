import { AbstractValidator } from "fluent-ts-validator";
import { Speaker } from '../entities/speaker';

export class SpeakerValidator extends AbstractValidator<Speaker> {
    constructor() {
        super();

        this.validateIfString((doc) => doc.name)
            .isNotEmpty()
            .withFailureMessage("Name is required");
        this.validateIfString((doc) => doc.company)
            .isNotEmpty()
            .withFailureMessage("Company is required");
        this.validateIfString((doc) => doc.twitter)
            .isNotEmpty()
            .withFailureMessage("Twitter is required");
        this.validateIfString((doc) => doc.blog)
            .isNotEmpty()
            .withFailureMessage("blog is required");
        this.validateIfString((doc) => doc.github)
            .isNotEmpty()
            .withFailureMessage("github is required");
        this.validateIfString((doc) => doc.complexity)
            .isNotEmpty()
            .withFailureMessage("complexity is required");
        this.validateIfString((doc) => doc.shortBio)
            .isNotEmpty()
            .withFailureMessage("shortBio is required");      
        this.validateIfString((doc) => doc.bio)
            .isNotEmpty()
            .withFailureMessage("bio is required");                    
    }
}
