import { Component, OnInit } from '@angular/core';
import { CommonService } from '@services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'tapcorp-assignment';
  public isProcessing = false;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.consumerProcessingEvent();
  }

  private consumerProcessingEvent() {
    this.commonService.onChangeStateProgressSpinner.subscribe(
      (toggleValue: boolean) => (this.isProcessing = toggleValue)
    );
  }
}
