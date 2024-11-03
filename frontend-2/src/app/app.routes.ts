import { Routes } from '@angular/router';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeeTopicsComponent } from './see-topics/see-topics.component';
import { TopicPostsComponent } from './topic-posts/topic-posts.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'topics', component: SeeTopicsComponent },
  { path: 'topic/:title', component: TopicPostsComponent },
  { path: 'addTopic', component: AddTopicComponent },
];
