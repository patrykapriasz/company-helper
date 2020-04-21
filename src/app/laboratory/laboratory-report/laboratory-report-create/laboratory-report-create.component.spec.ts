import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryReportCreateComponent } from './laboratory-report-create.component';

describe('LaboratoryReportCreateComponent', () => {
  let component: LaboratoryReportCreateComponent;
  let fixture: ComponentFixture<LaboratoryReportCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryReportCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryReportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
