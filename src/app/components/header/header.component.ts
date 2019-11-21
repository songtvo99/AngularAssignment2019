import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'Book Store';
  public numberItems: number;
  public displayNumber: string;

  constructor() { }

  ngOnInit() {
    this.displayNumber = '';
    this.numberItems = 0;
  }

}
