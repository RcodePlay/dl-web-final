import { Request, Response } from 'express';
import { DIContainer } from '../../infrasrtucture/DIContainer.js';

export class EventController {
    private getAllEvents = DIContainer.getGetAllEventsUseCase();
    private getEventByID = DIContainer.getGetEventByIdUseCase();
    private createEvent = DIContainer.getCreateEventUseCase();
    private updateEvent = DIContainer.getUpdateEventUseCase();
    private deleteEvent = DIContainer.getDeleteEventUseCase();

    async getAll(req: Request, res: Response) {
        const events = await this.getAllEvents.execute();
        res.json(events);
    }

    async getById(req: Request, res: Response) {
        const event = await this.getEventByID.execute(req.params.id);
        res.json(event);
    }

    async create(req: Request, res: Response) {
        const newEvent = req.body;
        const event = await this.createEvent.execute(newEvent);
        res.json(event);
    }

    async update(req: Request, res: Response) {
        const updatedEvent = req.body;
        const event = await this.updateEvent.execute(updatedEvent);
        res.json(event);
    }

    async delete(req: Request, res: Response) {
        const event = await this.deleteEvent.execute(req.params.id);
        res.json(event);
    }
}
