import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductParameter } from 'src/app/share/models/productParameter.model';
import { ReportItem } from '../report-item.model';


@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.scss']
})
export class ReportItemComponent implements OnInit {

  @Input()productParameter: ProductParameter;
  @Output()finishedReaserch = new EventEmitter<ReportItem>();

  @Input() existingReportItem: ReportItem

  reportItem: ReportItem;

  constructor() { }

  addParameterValue(event: number) {
    if(event) {
      this.reportItem = {
        id: null,
        productParameter: this.productParameter,
        value: event
      };
      this.finishedReaserch.emit(this.reportItem);
    }
  }

  ngOnInit(): void {

  }

}
