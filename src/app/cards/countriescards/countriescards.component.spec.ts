import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriescardsComponent } from './countriescards.component';

describe('CountriescardsComponent', () => {
  let component: CountriescardsComponent;
  let fixture: ComponentFixture<CountriescardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriescardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriescardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
