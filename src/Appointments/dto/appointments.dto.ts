import Event from "../../Events/entities/event.entity";

export class Appointment {
    id: string;

    // eslint-disable-next-line camelcase
    person_name: string;

    event: Event;
}
