import { Component, viewChild, ElementRef } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  imports: [ MatIconModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  state = 'collaspe';
  classList = 'cols-12 nav-center';

  showMenu() {
    if (this.state === 'collaspe') {
      this.state = 'expanded';
      this.classList = 'cols-12 nav-center-open'
    } else {
      this.state = 'collaspe';
      this.classList = 'cols-12 nav-center'
    }
  }
}
