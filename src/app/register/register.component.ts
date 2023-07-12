import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email?: string;
  password?: string;
  constructor(private http: HttpClient, private router: Router){}

  // register() {
  //   const credentials = { email: this.email, password: this.password };

  //   this.http.post<any>('http://localhost:8080/api/register', credentials).subscribe(
  //     () => {
  //       console.log('Registration successful');
  //       this.router.navigate(['/login']);// Redirect to login page or perform any other action
  //     },
  //     (error) => {
  //       console.error('Registration failed', error);
  //       // Handle registration error (e.g., display an error message)
  //     }
  //   );
  // }

  register() {
    const credentials = { email: this.email, password: this.password };

    this.http.post<any>('http://localhost:8080/api/register', credentials).subscribe(
      () => {
        console.log('Registration successful');
        this.router.navigate(['/login']); // Redirect to the login page after successful registration
      },
      (error: HttpErrorResponse) => {
        console.error('Registration failed', error.error);
        // Handle registration error (e.g., display an error message)
      }
    );
  }
}
