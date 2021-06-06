import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackDuckLibComponent } from './black-duck-lib.component';

describe('BlackDuckLibComponent', () => {
  let component: BlackDuckLibComponent;
  let fixture: ComponentFixture<BlackDuckLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackDuckLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackDuckLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
