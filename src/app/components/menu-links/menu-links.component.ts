import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd  } from '@angular/router';
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
  }
  
  get leftMargin() {
    return `margin-left: ${this.LeftMargin}px`
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
