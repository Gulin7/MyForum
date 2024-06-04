import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-topic-posts',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './topic-posts.component.html',
  styleUrls: ['./topic-posts.component.css'],
})
export class TopicPostsComponent implements OnInit {
  topicTitle: string | null = null;
  posts: Post[] = [];
  currentUser: string | null = localStorage.getItem('user');
  postForm: FormGroup = new FormGroup('');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/login']);
    } else {
      this.postForm = this.formBuilder.group({
        Comment: [''],
      });
    }
    this.route.queryParams.subscribe((params) => {
      this.topicTitle = params['title'];
    });
    this.postService.getPostByTitle('topicTitle').subscribe((posts) => {
      this.posts = posts;
    });
  }

  addPost(): void {
    if (this.postForm.invalid) {
      return;
    }

    const commentControl = this.postForm.get('comment');

    if (commentControl && this.currentUser && this.topicTitle) {
      const newPost: Post = {
        comment: commentControl.value,
        username: this.currentUser,
        topicTitle: this.topicTitle, // Replace with the actual topic title
      };

      this.postService.addPost(newPost).subscribe((post) => {
        this.posts.push(post);
        this.postForm.reset();
      });
    }
  }

  deletePost(post: Post): void {
    this.postService
      .deletePost(post.username, post.topicTitle)
      .subscribe(() => {
        this.posts = this.posts.filter((p) => p !== post);
      });
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
