import {Component, DestroyRef, inject, OnInit, ElementRef, QueryList, viewChildren} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-work-history',
  imports: [],
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.scss'
})
export class WorkHistoryComponent implements OnInit {
  private httpClient = inject(HttpClient);
  private destroyref = inject(DestroyRef);
  whData : any = [];
  showMore: boolean = false;
  showClass: string = "hideShowMore";
  showText: string = "Show more";

  showMoreButtons = viewChildren("smbtn", { read: ElementRef });

  ngOnInit() {
    const subscription = this.httpClient.get('/workhistory.json')
      .subscribe({
        next: data => {
          this.whData = data;
        }
      });

    this.destroyref.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  toggleShowMore(buttonId: string)
  {
    const wrkbtn = this.showMoreButtons().filter( btn => btn.nativeElement.id === buttonId);
    wrkbtn[0].nativeElement.textContent = "Show less";
  }
}
