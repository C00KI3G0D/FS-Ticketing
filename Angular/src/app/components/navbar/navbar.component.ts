import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public open: boolean = false;

  constructor() {}

  toggle(): void {
    this.open = !this.open;
  }
}
