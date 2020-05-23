import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryReportListItemComponent } from './laboratory-report-list-item.component';

describe('LaboratoryReportCardComponent', () => {
  let component: LaboratoryReportListItemComponent;
  let fixture: ComponentFixture<LaboratoryReportListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryReportListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryReportListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
