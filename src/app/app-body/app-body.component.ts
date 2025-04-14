import { Component } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {AboutmeComponent} from '../aboutme/aboutme.component';
import {WorkHistoryComponent} from '../work-history/work-history.component';
import {SkillsComponent} from '../skills/skills.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {ContactmeComponent} from '../contactme/contactme.component';

@Component({
  selector: 'app-app-body',
  imports: [
    HomeComponent,
    AboutmeComponent,
    WorkHistoryComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactmeComponent
  ],
  templateUrl: './app-body.component.html',
  styleUrl: './app-body.component.scss'
})
export class AppBodyComponent {

}
