import { Router } from 'express';
import { MongoEventRepository } from '../../infrastructure/repositories/MongoEventRepository';
import { GetAllEvents } from '../../use-cases/GetAllEvents';
import { FindEventById } from '../../use-cases/FindEventById';
import { CreateEvent } from '../../use-cases/CreateEvent';
import { UpdateEvent } from '../../use-cases/UpdateEvent';
import { DeleteEvent } from '../../use-cases/DeleteEvent';

import { EventController } from '../controllers/EventController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

const eventRepository = new MongoEventRepository();
const getAllEvents = new GetAllEvents(eventRepository);
const findEventId = new FindEventById(eventRepository);
const createEvent = new CreateEvent(eventRepository);
const updateEvent = new UpdateEvent(eventRepository);
const deleteEvent = new DeleteEvent(eventRepository);

const eventController = new EventController();
// getAllEvents,
// findEventId,
// createEvent,
// updateEvent,
// deleteEvent,

router.get('/events', (req, res) => eventController.getAll(req, res));
router.get('/events/:id', (req, res) => eventController.findById(req, res));
router.post('/events/new', authenticateToken, (req, res) =>
    eventController.create(req, res),
);
router.put('/events/update', authenticateToken, (req, res) =>
    eventController.update(req, res),
);
router.delete('/events/delete', authenticateToken, (req, res) =>
    eventController.delete(req, res),
);

export { router as eventRoutes };
