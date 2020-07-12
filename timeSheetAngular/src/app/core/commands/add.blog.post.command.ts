import { BlogPost } from '../entities/blog.post';

export class AddBlogPostCommand {
  public blogPost: BlogPost;

  constructor() {
    this.blogPost = new BlogPost();
  }
}