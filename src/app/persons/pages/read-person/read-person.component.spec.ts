import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPersonComponent } from './read-person.component';

describe('ReadPersonComponent', () => {
  let component: ReadPersonComponent;
  let fixture: ComponentFixture<ReadPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadPersonComponent]
    });
    fixture = TestBed.createComponent(ReadPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
