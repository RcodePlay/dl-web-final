import { EventRepository } from '../domain/interfaces/EventRepository.js';
import { Event } from '../domain/entities/Event.js';

export class CreateEvent {
    constructor(private eventRepository: EventRepository) {}

    async execute(event: Event) {
        return await this.eventRepository.create(event);
    }
}
