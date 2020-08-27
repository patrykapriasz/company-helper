import { Component, OnInit, Input } from '@angular/core';
import { PanelService } from '../panel.service';
import { PanelModel } from '../panel.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() title: String;
  websocketResponse: PanelModel;

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.panelService.getDelivery().subscribe(response=> {
      this.websocketResponse = response;
    })
  }

}
