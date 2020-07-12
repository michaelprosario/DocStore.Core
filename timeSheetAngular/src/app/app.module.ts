import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ListSpeakersComponent } from './list-speakers/list-speakers.component';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { LoginComponent } from './login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UsersService } from './core/services/users.service';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';

@NgModule({
  declarations: [
    AppComponent,
    EditSpeakerComponent,
    HomeComponent,
    InfoBarComponent,
    ListSpeakersComponent,
    LoginComponent,
    SiteHeaderComponent,
    ToolBarComponent,
    UserSignupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LMarkdownEditorModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    UsersService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
