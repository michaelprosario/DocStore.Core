import { AbstractValidator } from "fluent-ts-validator";

export class Post {
  public id: string = "";
  public name: string;
  public content: string;
  public createdBy: string;
  public createdAt: string;
  public updatedBy: string;
  public updatedAt: string;
  public tags: string;
  public permaLink: string;
  public status: string;
}

export class PostValidator extends AbstractValidator<Post> {
    constructor() {
        super();

        this.validateIfString((doc) => doc.name)
            .isNotEmpty()
            .withFailureMessage("Name is required");
        this.validateIfString((doc) => doc.content)
            .isNotEmpty()
            .withFailureMessage("Content is required");
        this.validateIfString((doc) => doc.createdBy)
            .isNotEmpty()
            .withFailureMessage("CreatedBy is required");
        this.validateIfString((doc) => doc.createdAt)
            .isNotEmpty()
            .withFailureMessage("CreatedAt is required");
        this.validateIfString((doc) => doc.updatedBy)
            .isNotEmpty()
            .withFailureMessage("UpdatedBy is required");
        this.validateIfString((doc) => doc.updatedAt)
            .isNotEmpty()
            .withFailureMessage("UpdatedAt is required");
        this.validateIfString((doc) => doc.tags)
            .isNotEmpty()
            .withFailureMessage("Tags is required");
        this.validateIfString((doc) => doc.permaLink)
            .isNotEmpty()
            .withFailureMessage("PermaLink is required");
        this.validateIfString((doc) => doc.status)
            .isNotEmpty()
            .withFailureMessage("Status is required");
    }
}
