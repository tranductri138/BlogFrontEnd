import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';

@Component({
  selector: 'app-button-profile',
  templateUrl: './button-profile.component.html',
  styleUrls: ['./button-profile.component.scss']
})
export class ButtonProfileComponent implements OnInit {

  constructor(
    private service : AllService
  ) { }

  ngOnInit(): void {
  }
  goToPage(name :string) {
    this.service.goToPage(name) ;
  }
}
