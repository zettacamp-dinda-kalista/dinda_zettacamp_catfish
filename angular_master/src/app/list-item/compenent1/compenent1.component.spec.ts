import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compenent1Component } from './compenent1.component';

describe('Compenent1Component', () => {
  let component: Compenent1Component;
  let fixture: ComponentFixture<Compenent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compenent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compenent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
