import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TopicService } from '../../topic.service';

@Component({
  selector: 'app-add-topic',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css'],
})
export class AddTopicComponent implements OnInit {
  topicForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    } else {
      this.topicForm = this.formBuilder.group({
        title: [''],
      });
    }
  }

  addTopic(): void {
    if (this.topicForm.invalid) {
      return;
    }

    const titleControl = this.topicForm.get('title');

    const username = localStorage.getItem('user') || ''; // Get username from local storage
    if (titleControl) {
      this.topicService
        .addTopic({ title: titleControl.value, username })
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.router.navigate(['/topics']);
  }
}
