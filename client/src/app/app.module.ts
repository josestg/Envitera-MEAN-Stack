import { HomeService } from './services/home.service';
import { AuthGuard } from './auth.guard';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsService } from './services/posts.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MustMatchDirective } from './helpers/must-match.directive';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { DevComponent } from './commponents/dev/dev.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostsComponent,
    ProfileComponent,
    NavbarComponent,
    MustMatchDirective,
    SinglePostComponent,
    HomeComponent,
    DevComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthService, PostsService,AuthGuard,HomeService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }