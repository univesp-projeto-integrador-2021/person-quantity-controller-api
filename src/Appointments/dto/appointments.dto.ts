import Event from "../../Events/entities/event.entity";

export class User {
    id: string;

    // eslint-disable-next-line camelcase
    person_name: string;

    event: Event;
}
