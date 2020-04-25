import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryReportCardComponent } from './laboratory-report-card.component';

describe('LaboratoryReportCardComponent', () => {
  let component: LaboratoryReportCardComponent;
  let fixture: ComponentFixture<LaboratoryReportCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryReportCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
