import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient, private router: Router) { }
  logout() {
    this.http.post<any>('http://localhost:8080/api/logout', {}).subscribe(
      () => {
        console.log('Logout successful');
        this.router.navigate(['/login']); // Redirect to the login page after logout
      },
      (error) => {
        console.error('Logout failed', error);
        // Handle logout error (e.g., display an error message)
      }
    );
  }
}
