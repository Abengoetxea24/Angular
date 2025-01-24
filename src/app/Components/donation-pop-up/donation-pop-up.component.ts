import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-pop-up',
  templateUrl: './donation-pop-up.component.html',
  styleUrls: ['./donation-pop-up.component.scss']
})
export class DonationPopUpComponent {

  constructor(private router: Router) {}

  closeDialog(): void {
    this.router.navigate(['/home']);
  }
}