import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginState = new BehaviorSubject<boolean>(true);
  loginState$ = this.loginState.asObservable()
  constructor() {}
  changeState() : void{
    this.loginState.next(!this.loginState)
  }
  changeStateLogout() {  
    this.loginState.next(true)
  }
}
