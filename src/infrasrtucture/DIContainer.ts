import { MongoEventRepository } from './repositories/MongoEventRepository';
import { GetAllEvents } from '../use-cases/GetAllEvents';
import { GetEventById } from '../use-cases/GetEventById';
import { CreateEvent } from '../use-cases/CreateEvent';
import { UpdateEvent } from '../use-cases/UpdateEvent';
import { DeleteEvent } from '../use-cases/DeleteEvent';

class DIContainer {
    private static _eventRepository = new MongoEventRepository();

    static getEventRepository() {
        return this._eventRepository;
    }

    static getGetAllEventsUseCase() {
        return new GetAllEvents(this.getEventRepository());
    }

    static getGetEventByIdUseCase() {
        return new GetEventById(this.getEventRepository());
    }

    static getCreateEventUseCase() {
        return new CreateEvent(this.getEventRepository());
    }

    static getUpdateEventUseCase() {
        return new UpdateEvent(this.getEventRepository());
    }

    static getDeleteEventUseCase() {
        return new DeleteEvent(this.getEventRepository());
    }
}

export { DIContainer };
