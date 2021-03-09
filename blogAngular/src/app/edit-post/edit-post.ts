import { AbstractValidator } from "fluent-ts-validator";

export class Post {
  public id: string = "";
  public name: string = "";
  public content: string = "";
  public createdBy: string = "";
  // @ts-ignore
  public createdAt: string = null;
  public updatedBy: string = "";
  // @ts-ignore
  public updatedAt: string = null;
  public tags: string = "";
  public permaLink: string = "";
  public status: string = "draft";
}

export class PostValidator extends AbstractValidator<Post> {

  constructor()
  {
    super();
    this.validateIfString( r => r.id ).isNotNull().isNotEmpty();
    this.validateIfString( r => r.name ).isNotNull().isNotEmpty();
    this.validateIfString( r => r.content ).isNotNull().isNotEmpty();
    this.validateIfString( r => r.permaLink ).isNotNull().isNotEmpty();
    this.validateIfString( r => r.status ).isNotNull().isNotEmpty();
  }
}