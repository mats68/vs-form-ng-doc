import { Component, OnInit, Input } from '@angular/core';
import { AppLinks, ILink, ILinks } from 'src/app/config/links'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() id: number;
  Link: ILink;

  constructor() { }

  ngOnInit(): void {
    this.findLink(AppLinks);
  }
  getClass() {
    if (!this.Link) return ''
    if (this.Link.id < 100) return 'mat-h1';
    if (this.Link.id < 1000) return 'mat-h2';
    return 'mat-h3';
  }

  findLink(links: ILinks) {
    if (this.Link) return;
    links.forEach(link => {
      if (link.id === this.id) {
        this.Link = link;
      }
      if (link.children) {
        this.findLink(link.children);
      }
    });

  }

}
