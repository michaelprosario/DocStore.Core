import { BlogPost } from '../core/entities/blog.post';
import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../core/services/document.service';
import { GetDocumentsByCollectionQuery } from '../core/queries/get.documents.by.collection.query';
import { IGenericResponse } from '../core/responses/generic.response';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  posts: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private docsService: DocumentsService
  ) { }

  ngOnInit() {
    const query = new GetDocumentsByCollectionQuery();
    query.collectionName = 'BlogPost';

    this.docsService.getAll(query).then(serverResponse => {
      const response = serverResponse as unknown as IGenericResponse;
      this.posts = response.data;
    }).catch(error => {
      console.log('Error on list document operation');
      console.log(error);
    })
  }

  onNewPost() {
    this.router.navigate(['/newPost']);
  }

  openPost(recordId: string) {
    this.router.navigate(['/editPost/' + recordId]);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
