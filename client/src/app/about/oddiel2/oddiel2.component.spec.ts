import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oddiel2Component } from './oddiel2.component';

describe('Oddiel2Component', () => {
  let component: Oddiel2Component;
  let fixture: ComponentFixture<Oddiel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oddiel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oddiel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
