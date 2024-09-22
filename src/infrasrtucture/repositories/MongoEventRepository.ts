import { Event } from '../../domain/entities/Event.js';
import { EventRepository } from '../../domain/interfaces/EventRepository.js';
import { EventModel } from '../../domain/entities/EventM.js';
import mongoose from 'mongoose';
import { logger } from '../logger.js';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.DB_STRING as string;
mongoose.set('strictQuery', false);

if (!db) {
    logger.error('Database connection string is not defined in env variables');
}

mongoose
    .connect(db, {
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
        logger.info('Connected to the database');
    })
    .catch((err) => {
        logger.error('Database connection error:' + err);
    });

export class MongoEventRepository implements EventRepository {
    async findAll(): Promise<Event[]> {
        return await EventModel.find();
    }

    async findById(id: string): Promise<Event | null> {
        return await EventModel.findById(id);
    }

    async create(event: Event): Promise<Event> {
        const recievedEvent = {
            ...event,
            publishedDate: new Date(),
        };
        const newEvent = new EventModel(recievedEvent);
        await newEvent.save();
        logger.http('Created an event');
        return newEvent;
    }

    async update(event: Event): Promise<void> {
        logger.http('Updated an Event');
        await EventModel.findByIdAndUpdate(event._id, event);
    }

    async delete(id: string): Promise<void> {
        logger.http('Deleted an Event');
        await EventModel.findByIdAndDelete(id);
    }
}
