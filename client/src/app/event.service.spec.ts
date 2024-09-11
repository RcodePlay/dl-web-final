import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EventService } from './event.service';

describe('EventService', () => {
    let service: EventService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [HttpClient, HttpHandler],
        });
        service = TestBed.inject(EventService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
