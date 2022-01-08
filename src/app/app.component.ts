import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  loginState : boolean = true;
  elseProfile : boolean = false;
  constructor(
    private router: Router, 
    private serviceLogin : LoginService
  ) {
    this.getStateLogin();
  }
  getStateLogin() {
    this.serviceLogin.loginState$.subscribe((val)=> {
      this.loginState = val
      this.elseProfile = !val
    })
  }

  changeState() {
    this.serviceLogin.changeStateLogout()
  }
  
  goToPage(name: string): void {
    this.router.navigate([`${name}`]);
  }
}