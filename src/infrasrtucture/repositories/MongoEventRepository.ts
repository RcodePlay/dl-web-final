import { Event } from '../../domain/entities/Event';
import { EventRepository } from '../../domain/interfaces/EventRepository';
import { EventModel } from '../../domain/entities/EventM';
import mongoose from 'mongoose';
import { logger } from '../logger';

const db = process.env.DB_STRING as string;
mongoose.set('strictQuery', false);

if (!db) {
    throw new Error(
        'Database connection string is not defined in env variables',
    );
}

mongoose
    .connect(db, {
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
        logger.info('Connected to the database');
    })
    .catch((err) => {
        throw new Error('Database connection error:' + err);
    });

export class MongoEventRepository implements EventRepository {
    async findAll(): Promise<Event[]> {
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
