import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'posts/:id',
    component:SinglePostComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
