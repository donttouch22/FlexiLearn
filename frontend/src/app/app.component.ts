import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api-service';
import { AuthButtonComponent } from './components/auth-button/auth-button.component/auth-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthButtonComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  MessageTest = 'flexiLearn';
  constructor(private apiService: ApiService) { 
    this.apiService.getMessage().subscribe((data: any) => {
      this.MessageTest = data.message;
      console.log(data);
    });
  }
}
