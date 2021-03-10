
import { AlertModule } from 'ngx-foundation';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPostComponent } from './list-post/list-post.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuItem } from 'primeng/api';
import { ModalModule } from 'ngx-foundation';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    EditPostComponent,
    ListPostComponent
  ],
  imports: [
    AlertModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PanelModule,
    PanelMenuModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
