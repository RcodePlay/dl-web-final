import { MongoEventRepository } from './repositories/MongoEventRepository';
import { GetAllEvents } from '../use-cases/GetAllEvents';
import { FindEventById } from '../use-cases/FindEventById';
import { CreateEvent } from '../use-cases/CreateEvent';
import { UpdateEvent } from '../use-cases/UpdateEvent';
import { DeleteEvent } from '../use-cases/DeleteEvent';

class DIContainer {
    private static _eventRepositary = new MongoEventRepository();

    static getEventRepository() {
        return this._eventRepositary;
    }

    static getGetAllEventsUseCase() {
        return new GetAllEvents(this.getEventRepository());
    }

    static getFindByIdSUseCase() {
        return new FindEventById(this.getEventRepository());
    }

    static getCreateEventUseCase() {
        return new CreateEvent(this.getEventRepository());
    }

    static getUpdateEventUseCase() {
        return new UpdateEvent(this.getEventRepository());
    }

    static getDeleteEventSUseCase() {
        return new DeleteEvent(this.getEventRepository());
    }
}

export { DIContainer };
