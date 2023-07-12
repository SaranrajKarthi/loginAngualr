import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(private http: HttpClient, private router: Router) { }

  // login() {
  //   const credentials = { email: this.email, password: this.password };

  //   this.http.post<any>('http://localhost:8080/api/login', credentials).subscribe(
  //     () => {
  //       console.log('Login successful');
  //       // Redirect to home page or perform any other action
  //     },
  //     (error) => {
  //       console.error('Login failed', error);
  //       // Handle login error (e.g., display an error message)
  //     }
  //   );
  // }

  login() {
    const credentials = { email: this.email, password: this.password };

    this.http.post<any>('http://localhost:8080/api/login', credentials).subscribe(
      (response) => {
        const result : string = 'Loginsuccessful.';
        console.log('Login response:', response);
        if (response === result) {
        
          console.log('Login successful');
          this.router.navigate(['/home']);// Redirect to home page or perform any other action
        } else {
          console.error('Login failed:', response);
          // Handle login error (e.g., display an error message)
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        // Handle login error (e.g., display an error message)
      }
    );
  }
}
  
  

  // login() {
  //   const credentials = { email: this.email, password: this.password };
  
  //   this.http.post<any>('http://localhost:8080/api/login', credentials).subscribe(
  //     (response) => {
  //       console.log('Login successful');
  //       if (response === 'Login successful.') {
  //         this.router.navigate(['/home']); // Redirect to the home page or perform any other action
  //       } else {
  //         // Handle login error (e.g., display an error message)
  //       }
  //     },
  //     (error) => {
  //       console.error('Login failed', error);
  //       // Handle login error (e.g., display an error message)
  //     }
  //   );
  // }

