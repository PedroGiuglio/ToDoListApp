import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTareaHomeComponent } from './add-tarea-home.component';

describe('AddTareaHomeComponent', () => {
  let component: AddTareaHomeComponent;
  let fixture: ComponentFixture<AddTareaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTareaHomeComponent]
    });
    fixture = TestBed.createComponent(AddTareaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
