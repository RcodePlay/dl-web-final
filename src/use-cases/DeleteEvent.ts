import { EventRepository } from '../domain/interfaces/EventRepository';

export class DeleteEvent {
    constructor(private eventRepository: EventRepository) {}

    async execute(id: string) {
        return await this.eventRepository.delete(id);
    }
}
