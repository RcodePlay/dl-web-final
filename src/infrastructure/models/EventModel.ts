import mongoose, { Schema, Document } from 'mongoose';

interface IEvent extends Document {
    title: string;
    author: string;
    content: string;
    tags: [];
    publishedDate: Date;
}

const EventSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [], required: true },
    publishedDate: { type: Date, required: true },
});

const EventModel = mongoose.model<IEvent>('Event', EventSchema);
export { EventModel, IEvent };
