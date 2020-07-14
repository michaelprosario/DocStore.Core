import { EditTimeSheetComponent } from './edit-time-sheet/edit-time-sheet.component';
import { HomeComponent } from './home/home.component';
import { ListTimeSheetComponent } from './list-time-sheet/list-time-sheet.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  { path: 'editTimeSheet/:id', component: EditTimeSheetComponent },
  { path: 'listTimeSheets', component: ListTimeSheetComponent },
  { path: 'newTimeSheet', component: EditTimeSheetComponent },  

  { path: 'login', component: LoginComponent },
  { path: 'userSignup', component: UserSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
