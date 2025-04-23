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
  moreWorkHistory = viewChildren("moreHistory", { read: ElementRef });

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
    let buttonIdNumber = buttonId.substring(1);
    let btnState: string = "";
    let wrkbtn = this.showMoreButtons().filter( btn => btn.nativeElement.id === 'sm'+buttonIdNumber);
    let detailHistory = this.moreWorkHistory().filter( section => section.nativeElement.id === 'mh'+buttonIdNumber )

    btnState = wrkbtn[0].nativeElement.dataset.state;
    if (btnState == 'less') {
      wrkbtn[0].nativeElement.textContent = 'Show less';
      wrkbtn[0].nativeElement.dataset.state = 'more';
      detailHistory[0].nativeElement.classList.value = 'showMore';
    } else {
      wrkbtn[0].nativeElement.textContent = 'Show more';
      wrkbtn[0].nativeElement.dataset.state = 'less';
      detailHistory[0].nativeElement.classList.value = 'hideShowMore';
    }
  }
}
