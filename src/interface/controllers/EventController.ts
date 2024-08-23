import { Request, Response } from 'express';
import { DIContainer } from '../../infrastructure/DIContainer';
import { CreateEventDto } from '../dto/CreateEventDto';
import { validate } from 'class-validator';
export class EventController {
    private getAllEvents = DIContainer.getGetAllEventsUseCase();
    private findEventId = DIContainer.getFindByIdSUseCase();
    private createEvent = DIContainer.getCreateEventUseCase();
    private updateEvent = DIContainer.getUpdateEventUseCase();
    private deleteEvent = DIContainer.getDeleteEventSUseCase();

    async getAll(req: Request, res: Response) {
        const events = await this.getAllEvents.execute();
        res.json(events);
    }

    async findById(req: Request, res: Response) {
        const eventId = req.params.id;
        const event = await this.findEventId.execute(eventId);
        res.json(event);
    }

    async create(req: Request, res: Response) {
        const dto = Object.assign(new CreateEventDto(), req.body);
        const errors = await validate(dto);

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const eventContents = req.body;
        const createdEvent = await this.createEvent.execute(eventContents);
        res.json(createdEvent);
    }

    async update(req: Request, res: Response) {
        const eventContents = req.body;
        const updatedEvent = await this.updateEvent.execute(eventContents);
        res.json(updatedEvent);
    }

    async delete(req: Request, res: Response) {
        const eventId = req.params.id;
        const deletedEvent = await this.deleteEvent.execute(eventId);
        res.json(deletedEvent);
    }
}
