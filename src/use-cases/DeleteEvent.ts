import { EventRepository } from '../domain/interfaces/EventRepository.js';

export class DeleteEvent {
    constructor(private eventRepository: EventRepository) {}

    async execute(id: string) {
        return await this.eventRepository.delete(id);
    }
}
