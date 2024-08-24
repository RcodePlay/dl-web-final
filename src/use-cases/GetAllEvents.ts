import { EventRepository } from '../domain/interfaces/EventRepository';

export class GetAllEvents {
    constructor(private eventRepository: EventRepository) {}

    async execute() {
        return await this.eventRepository.findAll();
    }
}
