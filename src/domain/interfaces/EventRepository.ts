import { Event } from '../entities/Event';

export interface EventRepository {
    findAll(): Promise<Event[]>;
    findById(id: string): Promise<Event | null>;
    create(event: Event): Promise<Event>;
    update(event: Event): Promise<void>;
    delete(id: string): Promise<void>;
}
