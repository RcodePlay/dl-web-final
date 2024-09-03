import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oddiel3Component } from './oddiel3.component';

describe('Oddiel3Component', () => {
  let component: Oddiel3Component;
  let fixture: ComponentFixture<Oddiel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oddiel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oddiel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
