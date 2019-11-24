import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.scss']
})
export class AppListItemComponent implements OnInit, OnDestroy {
  @Input() public columns: string[];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
