import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { HomeComponent } from './home/home.component';
import { ListSpeakersComponent } from './list-speakers/list-speakers.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  { path: 'editSpeaker/:id', component: EditSpeakerComponent },
  { path: 'listSpeakers', component: ListSpeakersComponent },
  { path: 'newSpeaker', component: EditSpeakerComponent },

  { path: 'login', component: LoginComponent },
  { path: 'userSignup', component: UserSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
