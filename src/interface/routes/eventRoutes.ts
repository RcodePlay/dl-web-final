import { Router } from 'express';
import { EventController } from '../controllers/EventController.js';

const router = Router();
const eventController = new EventController();

// Basic doc definition
/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Event id
 *         title:
 *           type: string
 *           description: Event title
 *         author:
 *           type: string
 *           description: Author who created the event
 *         content:
 *           type: string
 *           description: Event content
 *         publishedDate:
 *           type: string
 *           format: date
 *           description: Event creation date (in ISO 8601 format)
 *         dateOfEvent:
 *           type: string
 *           format: date
 *           description: Date of occurence of event (optional)
 *         tags:
 *           type: array
 *           description: Event tags (optional)
 *       example:
 *         _id: 1
 *         title: Summer camp 2024
 *         author: Main admin
 *         content: Summer camp of 2024
 *         publishedDate: "2024-08-09"
 *         tags: ["camp", "2024"]
 */

// /GET all events
/**
 * @swagger
 * /events:
 *  get:
 *    summary: Get all Events
 *    description: Get all Events
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.get('/', (req, res) => eventController.getAll(req, res));

// /GET event by it's id
/**
 * @swagger
 * /events/{id}:
 *  get:
 *    summary: Get Event detail
 *    description: Get Event detail
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Event id
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.get('/:id', (req, res) => eventController.getById(req, res));

// /POST a new event
/**
 * @swagger
 * /events/addEvent:
 *  post:
 *    summary: Add Event
 *    description: Add Event
 *    requestBody:
 *      description: A JSON object containing Event information
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Event'
 *          example:
 *            title: three-day spring 2024
 *            content: Three-day sleepover in spring 2024
 *            author: admin
 *            tags: ["three-day"]
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.post('/addEvent', (req, res) => eventController.create(req, res));

// /PUT edit an existing event
/**
 * @swagger
 * /events/editEvent/:
 *  put:
 *    summary: Edit Event
 *    description: Edit Event
 *    requestBody:
 *      description: A JSON object containing Event information
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Event'
 *          example:
 *            _id: 123456
 *            title: Summer camp 2025
 *            content: Summer camp of 2025
 *            author: admin
 *            tags: ["camp"]
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.put('/editEvent', (req, res) => eventController.update(req, res));

// /DELETE an existing event by it's id
/**
 * @swagger
 * /events/deleteEvent/{id}:
 *  delete:
 *    summary: Delete Event
 *    description: Delete Event
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Event id
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.delete('/deleteEvent/:id', (req, res) =>
    eventController.delete(req, res),
);

export { router as eventRoutes };
