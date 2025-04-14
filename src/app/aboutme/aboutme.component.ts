import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  openResume() {
    //window.location.href = "/ARhodesResume.pdf";
    window.open('/ARhodesResume.pdf', '_blank');
  }
}
