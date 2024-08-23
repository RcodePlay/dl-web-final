import { EventRepository } from '../domain/interfaces/EventRepository';

export class FindEventById {
    constructor(private eventRepository: EventRepository) {}

    async execute(id: string) {
        return await this.eventRepository.findById(id);
    }
}
