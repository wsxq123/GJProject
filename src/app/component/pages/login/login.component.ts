import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { AccountService } from './services/account.service';
import { MatButtonModule } from '@angular/material/button';
import { IntervalBlockComponent } from '../../shared/interval-block/interval-block.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink,
    MatButtonModule,
    IntervalBlockComponent,
    CommonModule,
  ],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  error?: string;
  success?: string;
  hide = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {
    // redirect to home if already logged in
    //if (this.accountService.userValue) {
    //this.router.navigate(['/']);
    //}
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      memberAccount: ['', Validators.required],
      memberPassword: ['', Validators.required],
    });

    // show success message after registration
    //if (this.route.snapshot.queryParams['registered']) {
    //this.success = 'Registration successful';
    //}
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }

    this.loading = true;

    console.log('Member Account:', this.f['memberAccount'].value);
    console.log('Member Password:', this.f['memberPassword'].value);

    this.accountService
      .login(this.f['memberAccount'].value, this.f['memberPassword'].value)
      .subscribe((loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigateByUrl('/profile');
        } else {
          console.log('Please try again');
        }
      });
  }
}

//.pipe(first())
//.subscribe({
//next: () => {
// get return url from query parameters or default to home page
//const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//this.router.navigateByUrl(returnUrl);
//},
//error: (error) => {
//this.error = error;
//this.loading = false;
//},
//});
