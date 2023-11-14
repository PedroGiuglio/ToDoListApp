import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosComponentComponent } from './turnos-component.component';

describe('TurnosComponentComponent', () => {
  let component: TurnosComponentComponent;
  let fixture: ComponentFixture<TurnosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnosComponentComponent]
    });
    fixture = TestBed.createComponent(TurnosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
