import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const usernameControl = this.registerForm.get('username');
    const passwordControl = this.registerForm.get('password');

    if (usernameControl && passwordControl) {
      const user: User = {
        username: usernameControl.value,
        password: passwordControl.value,
      };

      this.userService.registerUser(user).subscribe({
        next: (data) => {
          if (data) {
            this.router.navigate(['/topics']);
          }
        },
      });
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
