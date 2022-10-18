import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compenentt2Component } from './compenentt2.component';

describe('Compenentt2Component', () => {
  let component: Compenentt2Component;
  let fixture: ComponentFixture<Compenentt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compenentt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compenentt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
