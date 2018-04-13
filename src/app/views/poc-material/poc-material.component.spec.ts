import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MatDialogModule } from '@angular/material';
import { PocMaterialComponent } from './poc-material.component';

describe('PocMaterialComponent', () => {
  let component: PocMaterialComponent;
  let fixture: ComponentFixture<PocMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [PocMaterialComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
