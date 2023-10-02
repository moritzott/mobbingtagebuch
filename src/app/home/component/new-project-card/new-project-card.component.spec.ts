import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectCardComponent } from './new-project-card.component';

describe('NewProjectCardComponent', () => {
  let component: NewProjectCardComponent;
  let fixture: ComponentFixture<NewProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProjectCardComponent]
    });
    fixture = TestBed.createComponent(NewProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
