import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { EventService } from '../event.service';
@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
    selectedEvent: any | null = null;
    events: any = [];

    // I've never before seen someone use @Inject() for using a service in a component
    constructor(@Inject(EventService) private event: EventService) {}

    ngOnInit(): void {
        this.event.getEvents().subscribe((data: any) => {
            this.events = data;
        });
        console.log(this.events);
    }

    openEventDetails(event: any) {
        this.selectedEvent = event;
    }

    closeEventDetails() {
        this.selectedEvent = null;
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (
            this.selectedEvent &&
            !target.closest('.event-details') &&
            !target.closest('.event-item')
        ) {
            this.closeEventDetails();
        }
    }

    onEventDetailsClick(event: MouseEvent) {
        event.stopPropagation();
    }
}
