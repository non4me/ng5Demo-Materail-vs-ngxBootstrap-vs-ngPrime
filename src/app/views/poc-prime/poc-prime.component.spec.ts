import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocPrimeComponent } from './poc-prime.component';

describe('PocPrimeComponent', () => {
  let component: PocPrimeComponent;
  let fixture: ComponentFixture<PocPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PocPrimeComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
