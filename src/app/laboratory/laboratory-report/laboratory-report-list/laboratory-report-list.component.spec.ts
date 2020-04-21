import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryReportListComponent } from './laboratory-report-list.component';

describe('LaboratoryReportListComponent', () => {
  let component: LaboratoryReportListComponent;
  let fixture: ComponentFixture<LaboratoryReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
