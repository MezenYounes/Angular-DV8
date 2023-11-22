import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trucks';
  router: any;
  constructor (public authService: AuthService) {}
  onLogout(){
    this.authService.logout();
    }
    ngOnInit() {
      const isloggedin: string = localStorage.getItem('isloggedIn') || ''; // Assigns an empty string if null
      const loggedUser: string = localStorage.getItem('loggedUser') || ''; // Assigns an empty string if null
    
      if (isloggedin !== 'true' || !loggedUser) {
        this.router.navigate(['/login']);
      } else {
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
      }
    }
    
      

}
