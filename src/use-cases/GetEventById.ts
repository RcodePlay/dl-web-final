import { EventRepository } from '../domain/interfaces/EventRepository.js';

export class GetEventById {
    constructor(private eventRepository: EventRepository) {}

    async execute(id: string) {
        return await this.eventRepository.findById(id);
    }
}
