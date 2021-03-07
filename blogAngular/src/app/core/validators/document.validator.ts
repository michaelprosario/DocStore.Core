import { AbstractValidator, Severity } from "fluent-ts-validator";
import { Doc } from "../entities/doc";

export class DocumentValidator extends AbstractValidator<Doc> {
    constructor() {
        super();
        this.validateIfString((doc) => doc.name)
            .isNotEmpty()
            .withFailureMessage("name is required");
        this.validateIfString((doc) => doc.collectionName)
            .isNotEmpty()
            .withFailureMessage("collectionName is required");
        this.validateIfString((doc) => doc.jsonData)
            .isNotEmpty()
            .withFailureMessage("jsonData is required");
    }
}
