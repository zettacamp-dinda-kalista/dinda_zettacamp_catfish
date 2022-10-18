import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compenentt1Component } from './compenentt1.component';

describe('Compenentt1Component', () => {
  let component: Compenentt1Component;
  let fixture: ComponentFixture<Compenentt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compenentt1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compenentt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
