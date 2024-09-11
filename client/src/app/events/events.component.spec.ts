import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EventsComponent', () => {
    let component: EventsComponent;
    let fixture: ComponentFixture<EventsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EventsComponent],
            providers: [HttpClient, HttpHandler],
        }).compileComponents();

        fixture = TestBed.createComponent(EventsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
