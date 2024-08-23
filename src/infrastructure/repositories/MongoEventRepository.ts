import { Event } from '../../domain/entities/Event';
import { EventRepository } from '../../domain/interfaces/EventRepository';
import { EventModel } from '../models/EventModel';

export class MongoEventRepository implements EventRepository {
    async getAll(): Promise<Event[]> {
        return await EventModel.find();
    }

    async findById(id: string): Promise<Event | null> {
        return await EventModel.findById(id);
    }

    async create(event: Event): Promise<Event> {
        const newEvent = new EventModel(event);
        await newEvent.save();
        return newEvent;
    }

    async update(event: Event): Promise<void> {
        await EventModel.findByIdAndUpdate(event._id, event);
    }

    async delete(id: string): Promise<void> {
        await EventModel.findByIdAndDelete(id);
    }
}
