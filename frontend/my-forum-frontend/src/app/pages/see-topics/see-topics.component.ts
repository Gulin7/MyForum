import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Topic } from '../../topic';
import { TopicService } from '../../topic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-see-topics',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './see-topics.component.html',
  styleUrls: ['./see-topics.component.css'],
})
export class SeeTopicsComponent {
  topics: Topic[] = [];

  constructor(private topicService: TopicService, private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/login']); // Redirect to the login page if user is not set in local storage
    }
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });
  }

  redirectToAddTopic(): void {
    this.router.navigate(['/addTopic']);
  }
}
