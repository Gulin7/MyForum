import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if user is already logged inzzz
    if (localStorage.getItem('user')) {
      this.router.navigate(['/topics']);
    } else {
      this.loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
      });
    }
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    if (usernameControl && passwordControl) {
      const user: User = {
        username: usernameControl.value,
        password: passwordControl.value,
      };

      this.userService.loginUser(user).subscribe({
        next: (data) => {
          if (data) {
            localStorage.setItem('user', String(user.username));
            this.router.navigate(['/topics']);
          }
        },
      });
    }
  }
  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }
}
