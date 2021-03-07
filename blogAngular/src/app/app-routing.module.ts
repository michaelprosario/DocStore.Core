import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { 
    path: 'app', 
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'edit-post', pathMatch: 'full' },
      { path: 'edit-post', component: EditPostComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
