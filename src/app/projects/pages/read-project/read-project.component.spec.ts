import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProjectComponent } from './read-project.component';

describe('ReadProjectComponent', () => {
  let component: ReadProjectComponent;
  let fixture: ComponentFixture<ReadProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadProjectComponent]
    });
    fixture = TestBed.createComponent(ReadProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
