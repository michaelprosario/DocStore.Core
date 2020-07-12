import { AbstractValidator } from "fluent-ts-validator";
import { Sponsor } from '../entities/sponsor';

export class SponsorValidator extends AbstractValidator<Sponsor> {
    constructor() {
        super();

        this.validateIfString((doc) => doc.smallLogo)
            .isNotEmpty()
            .withFailureMessage("SmallLogo is required");
        this.validateIfString((doc) => doc.largeLogo)
            .isNotEmpty()
            .withFailureMessage("LargeLogo is required");
        this.validateIfString((doc) => doc.name)
            .isNotEmpty()
            .withFailureMessage("name is required");
        this.validateIfString((doc) => doc.sponsorLevel)
            .isNotEmpty()
            .withFailureMessage("SponsorLevel is required");
        this.validateIfString((doc) => doc.sponsorLink)
            .isNotEmpty()
            .withFailureMessage("SponsorLink is required");
           
    }
}