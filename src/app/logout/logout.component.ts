import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private http: HttpClient, private router:Router) { }

  logout() {
    this.http.post<any>('/api/logout', {}).subscribe(
      () => {
        console.log('Logout successful');
        this.router.navigate(['/login']); // Redirect to the login page after successful logout
      },
      (error) => {
        console.error('Logout failed', error);
        // Handle logout error (e.g., display an error message)
      }
    );
  }
}
