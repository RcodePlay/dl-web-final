import { EventRepository } from '../domain/interfaces/EventRepository.js';

export class GetAllEvents {
    constructor(private eventRepository: EventRepository) {}

    async execute() {
        return await this.eventRepository.findAll();
    }
}
