import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule],
})
export class ForgetPasswordComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  error?: string;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.error = '';
    this.submitted = true;

    if (this.form.invalid) {
      console.log('Form is invalid');
    }

    this.accountService.forgetPassword(this.f['email'].value).subscribe({
      next: () => {
        console.log('Password reset email sent successfully');
        this.router.navigate(['/resetpassword']);
        // You may redirect or show a success message here
      },
      error: (err: HttpErrorResponse) => {
        this.error =
          err.error.message ||
          'An error occurred while processing your request.';
      },
    });
  }

  get f() {
    return this.form.controls;
  }
}
