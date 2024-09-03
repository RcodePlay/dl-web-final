import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oddiel1Component } from './oddiel1.component';

describe('Oddiel1Component', () => {
  let component: Oddiel1Component;
  let fixture: ComponentFixture<Oddiel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oddiel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oddiel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
