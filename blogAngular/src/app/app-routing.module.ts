import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostComponent } from './list-post/list-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { 
    path: 'app', 
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'list-post', pathMatch: 'full' },
      { path: 'edit-post', component: EditPostComponent },
      { path: 'new-post', component: EditPostComponent },
      { path: 'list-post', component: ListPostComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
