import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router,UrlSegment,NavigationEnd   } from '@angular/router';
import {ILinks, ILink } from 'src/app/config/links'

@Component({
  selector: 'menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {
  @Input() Links: ILinks;
  @Input() LeftMargin: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log('this.router.url', this.router.url);
        }
      }
    );  
    }
  
  get leftMargin() {
    return `margin-left: ${this.LeftMargin}px`
  }

  activeRoute(link: ILink): string {
    const url = link.fragment ? link.link + '#' + link.fragment : link.link;
    return this.router.url === url ? 'active' : '';
  }

  onAnchorClick(link: ILink) {
    if (!(link && link.fragment)) return;
    setTimeout(() => {
      const anchor = document.getElementById(link.fragment);
      if (anchor) {
          anchor.focus();
          anchor.scrollIntoView();
      }
  });  }


}
