import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '@app/event.service';
@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
    constructor(private event: EventService) {}

    events: any = [];

    ngOnInit(): void {
        this.event.getEvents().subscribe((recievedEvents) => {
            this.events = recievedEvents;
        });
        console.log(this.events);
    }
}
