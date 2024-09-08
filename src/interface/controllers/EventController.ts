import { Request, Response } from 'express';
import { DIContainer } from '../../infrasrtucture/DIContainer.js';
import dotenv from 'dotenv';
dotenv.config();

export class EventController {
    private getAllEvents = DIContainer.getGetAllEventsUseCase();
    private getEventByID = DIContainer.getGetEventByIdUseCase();
    private createEvent = DIContainer.getCreateEventUseCase();
    private updateEvent = DIContainer.getUpdateEventUseCase();
    private deleteEvent = DIContainer.getDeleteEventUseCase();

    private corsClientUrl = process.env.CORS_CLIENT_URL as string;
    private corsAdminUrl = process.env.CORS_ADMIN_URL as string;

    async getAll(req: Request, res: Response) {
        const events = await this.getAllEvents.execute();
        res.setHeader('Access-Control-Allow-Origin', this.corsClientUrl);
        res.json(events);
    }

    async getById(req: Request, res: Response) {
        const event = await this.getEventByID.execute(req.params.id);
        res.setHeader('Access-Control-Allow-Origin', this.corsClientUrl);
        res.json(event);
    }

    async create(req: Request, res: Response) {
        const newEvent = req.body;
        const event = await this.createEvent.execute(newEvent);
        res.setHeader('Access-Control-Allow-Origin', this.corsAdminUrl);
        res.json(event);
    }

    async update(req: Request, res: Response) {
        const updatedEvent = req.body;
        const event = await this.updateEvent.execute(updatedEvent);
        res.setHeader('Access-Control-Allow-Origin', this.corsAdminUrl);
        res.json(event);
    }

    async delete(req: Request, res: Response) {
        const event = await this.deleteEvent.execute(req.params.id);
        res.setHeader('Access-Control-Allow-Origin', this.corsAdminUrl);
        res.json(event);
    }
}
