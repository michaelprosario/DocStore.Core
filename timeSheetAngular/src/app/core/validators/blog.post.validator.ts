import { AbstractValidator } from "fluent-ts-validator";
import { BlogPost } from '../entities/blog.post';

export class BlogPostValidator extends AbstractValidator<BlogPost> {
    constructor() {
        super();
        this.validateIfString((doc) => doc.title)
            .isNotEmpty()
            .withFailureMessage("Title is required");
        this.validateIfString((doc) => doc.author)
            .isNotEmpty()
            .withFailureMessage("Author is required");
        this.validateIfString((doc) => doc.content)
            .isNotEmpty()
            .withFailureMessage("Content is required");
    }
}
