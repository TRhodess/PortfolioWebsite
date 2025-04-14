import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { AppBodyComponent } from './app-body/app-body.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, AppBodyComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PortfolioSite';
}
