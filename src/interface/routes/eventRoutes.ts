import { Router } from 'express';
import { EventController } from '../controllers/EventController';

const router = Router();
const eventController = new EventController();

router.get('/', (req, res) => eventController.getAll(req, res));
router.get('/:id', (req, res) => eventController.getById(req, res));
router.post('/addEvent', (req, res) => eventController.create(req, res));
router.put('/editEvent', (req, res) => eventController.update(req, res));
router.delete('/deleteEvent/:id', (req, res) =>
    eventController.delete(req, res),
);

export { router as eventRoutes };
