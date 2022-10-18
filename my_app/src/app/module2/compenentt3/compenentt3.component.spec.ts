import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compenentt3Component } from './compenentt3.component';

describe('Compenentt3Component', () => {
  let component: Compenentt3Component;
  let fixture: ComponentFixture<Compenentt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compenentt3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compenentt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
