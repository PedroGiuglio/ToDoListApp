import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsComponentComponent } from './vacations-component.component';

describe('VacationsComponentComponent', () => {
  let component: VacationsComponentComponent;
  let fixture: ComponentFixture<VacationsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacationsComponentComponent]
    });
    fixture = TestBed.createComponent(VacationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
