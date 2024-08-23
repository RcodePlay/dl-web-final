import { EventRepository } from '../domain/interfaces/EventRepository';
import { Event } from '../domain/entities/Event';

export class CreateEvent {
    constructor(private eventRepository: EventRepository) {}

    async execute(event: Event) {
        return await this.eventRepository.create(event);
    }
}
