import { Routes } from '@angular/router';
import { AddTopicComponent } from './pages/add-topic/add-topic.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SeeTopicsComponent } from './pages/see-topics/see-topics.component';
import { TopicPostsComponent } from './pages/topic-posts/topic-posts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'topics', component: SeeTopicsComponent },
  { path: 'topics/:title', component: TopicPostsComponent },
  { path: 'addTopic', component: AddTopicComponent },
];
