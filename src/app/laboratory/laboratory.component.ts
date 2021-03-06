import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.scss']
})
export class LaboratoryComponent implements OnInit {

  constructor(private router: Router) { }

  openNewReport() {
    this.router.navigate(["reports"]);
  }

  openReportCardsPanel() {
    this.router.navigate(["reports/card-list"]);
  }

  ngOnInit(): void {

  }

}
