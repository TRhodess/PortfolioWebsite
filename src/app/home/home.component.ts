import { Component } from '@angular/core';
import {AboutmeComponent} from '../aboutme/aboutme.component';
import {WorkHistoryComponent} from '../work-history/work-history.component';
import {SkillsComponent} from '../skills/skills.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {ContactmeComponent} from '../contactme/contactme.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutmeComponent,
    WorkHistoryComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactmeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
