import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../services/account.service';
import { first } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, MatButtonModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss',
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  email: string = '';
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.resetForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    this.loading = true;

    this.accountService
      .resetPassword(
        this.resetForm.value.password,
        this.resetForm.value.confirmPassword
      )
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['login']); // Redirect to login page after successful password reset
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
}
