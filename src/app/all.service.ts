import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  constructor(
    private router : Router
  ) { }
  goToPage(name: string): void {
    this.router.navigate([`${name}`]);
  }
}
