import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppLinks, ILink, ILinks } from 'src/app/config/links'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  appLinks = AppLinks;
  private autoLogoutSubscription: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.traverseLinks(this.appLinks);
    console.log(this.appLinks);

  }

  traverseLinks(links: ILinks, pLink?: ILink) {
    links.forEach(l => {
      if (pLink) {
        if (!l.link) l.link = pLink.link;
        l.numbering = pLink.numbering + '.' + l.id.toString().split('').pop()
      } else {
        l.numbering = l.id.toString();
      }
      if (l.children) this.traverseLinks(l.children, l);
    })
    
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.autoLogoutSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
