import { Component, Input, OnInit } from '@angular/core';
import {ILinks } from 'src/app/config/links'

@Component({
  selector: 'menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {
  @Input() Links: ILinks;
  @Input() LeftMargin: number;

  constructor() { }

  ngOnInit(): void {
  }

  get leftMargin() {
    return `margin-left: ${this.LeftMargin}px`
  }

}
