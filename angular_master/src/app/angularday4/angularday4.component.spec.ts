import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularday4Component } from './angularday4.component';

describe('Angularday4Component', () => {
  let component: Angularday4Component;
  let fixture: ComponentFixture<Angularday4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angularday4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angularday4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
