import { PostsService } from './services/posts.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MustMatchDirective } from './helpers/must-match.directive';
import { CardComponent } from './compoments/card/card.component';
import { CardImgComponent } from './compoments/card-img/card-img.component';
import { CommentComponent } from './compoments/comment/comment.component';
import { PostsDetailComponent } from './compoments/posts-detail/posts-detail.component';
import { PostsListComponent } from './compoments/posts-list/posts-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostsComponent,
    ProfileComponent,
    NavbarComponent,
    MustMatchDirective,
    CardComponent,
    CardImgComponent,
    CommentComponent,
    PostsDetailComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthService, PostsService],
  bootstrap: [AppComponent]
})

export class AppModule { }