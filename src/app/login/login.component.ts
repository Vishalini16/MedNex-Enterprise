import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const data = {
      username: this.username,
      password: this.password
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', data)
      .subscribe(res => {
        console.log('Server Response:', res);
        alert('HttpClient working!');
        this.router.navigate(['/dashboard']);
      });
  }
}

