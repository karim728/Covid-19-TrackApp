import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecardsComponent } from './tablecards.component';

describe('TablecardsComponent', () => {
  let component: TablecardsComponent;
  let fixture: ComponentFixture<TablecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
