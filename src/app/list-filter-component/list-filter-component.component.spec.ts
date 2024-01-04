import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilterComponentComponent } from './list-filter-component.component';

describe('ListFilterComponentComponent', () => {
  let component: ListFilterComponentComponent;
  let fixture: ComponentFixture<ListFilterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFilterComponentComponent]
    });
    fixture = TestBed.createComponent(ListFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
