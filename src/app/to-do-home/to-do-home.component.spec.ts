import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoHomeComponent } from './to-do-home.component';

describe('ToDoHomeComponent', () => {
  let component: ToDoHomeComponent;
  let fixture: ComponentFixture<ToDoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoHomeComponent]
    });
    fixture = TestBed.createComponent(ToDoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
