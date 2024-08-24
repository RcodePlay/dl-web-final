import mongoose, { Document, Schema } from 'mongoose';

interface IEvent extends Document {
    title: string;
    author: string;
    content: string;
    publishedDate: Date;
    tags: [];
}

const EventSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    publishedDate: { type: Date },
    tags: { type: Array, required: false },
});

const EventModel = mongoose.model<IEvent>('Event', EventSchema);
export { EventModel, IEvent };
