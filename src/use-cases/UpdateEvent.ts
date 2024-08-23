import { EventRepository } from '../domain/interfaces/EventRepository';
import { Event } from '../domain/entities/Event';

export class UpdateEvent {
    constructor(private eventRepository: EventRepository) {}

    async execute(event: Event) {
        return await this.eventRepository.update(event);
    }
}
