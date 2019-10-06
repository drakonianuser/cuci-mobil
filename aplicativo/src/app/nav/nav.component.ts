import { Component, OnInit } from '@angular/core';
import { link } from "../model/links";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = 'primary';

  constructor() { }

  ngOnInit() {
  }

}