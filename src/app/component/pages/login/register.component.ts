import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from './services/account.service';
import { AlertService } from './services/alert.service';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmedValidator } from './components';
import { HttpErrorResponse } from '@angular/common/http';
import { IntervalBlockComponent } from '../../shared/interval-block/interval-block.component';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  standalone: true,
  styleUrl: './register.component.scss',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatSnackBarModule,
    IntervalBlockComponent,
    MatCommonModule,
  ],
})
export class RegisterComponent implements OnInit {
  member: unknown;
  travel: unknown;

  aboutus() {
    throw new Error('Method not implemented.');
  }
  login() {
    throw new Error('Method not implemented.');
  }
  form!: FormGroup;
  loading = false;
  submitted = false;
  AlertService: unknown;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService,
    private snackBar: MatSnackBar
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        username: ['', Validators.required],
        mobile: ['', [Validators.required]],
        primaryEmail: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.com$'),
        ]),
        address: [''],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: ConfirmedValidator('password', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }

    this.loading = true;
    this.accountService
      .register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          //this.alertService.success('Registration successful', true);
          this.openSuccessSnackBar('Registration successful');

          this.router.navigate(['login/userlogin'], {
            queryParams: { registered: true },
          });
        },
        error: (error: HttpErrorResponse) => {
          console.log('Error:', error); // Log the error object to see its content
          if (error.message.includes('already taken')) {
            this.openErrorSnackBar(
              'Username "' + this.form.value.username + '" is already taken'
            );
          } else {
            this.alertService.error('An error occurred: ' + error.message);
          }
          this.loading = false;
        },
      });
  }
  openSuccessSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 300, // Display duration in milliseconds
      verticalPosition: 'top', // Position the snackbar at the top of the screen
      panelClass: ['success-snackbar'], // Apply custom CSS class to style the snackbar for success
    });
  }

  openErrorSnackBar(errorMessage: string): void {
    this.snackBar.open(errorMessage, 'Close', {
      duration: 9000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'],
    });
  }
}
