import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadReportComponent } from './read-report.component';

describe('ReadReportComponent', () => {
  let component: ReadReportComponent;
  let fixture: ComponentFixture<ReadReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadReportComponent]
    });
    fixture = TestBed.createComponent(ReadReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
