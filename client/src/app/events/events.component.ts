import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../event.service';
@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
    // I've never before seen someone use @Inject() for using a service in a component
    constructor(@Inject(EventService) private event: EventService) {}

    events: any = [];

    ngOnInit(): void {
        this.event.getEvents().subscribe((recievedEvents: any) => {
            this.events = recievedEvents;
        });
        console.log(this.events);
    }
}
