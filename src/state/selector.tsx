import clientHttp from 'http/index';
import IEvent from 'interfaces/IEvent';
import { selector } from 'recoil';
import { stateEventsList, stateFilter } from './atom';

export const filteredEvents = selector({
    key: 'filteredEvents',
    get: ({ get }) => {
        const events = get(stateEventsList);
        const filter = get(stateFilter);

        return events.filter(event => {
            if (!filter.date) {
                return true;
            }

            return event.start.toISOString().slice(0, 10) === filter.date.toISOString().slice(0, 10);
        });
    },
});

export const apiEvents = selector({
    key: 'apiEvents',
    get: async () => {
        const response = await clientHttp.get('/events');

        const events: IEvent[] = response.data;

        return events.map(event => {
            event.start = new Date(event.start);
            event.end = new Date(event.end);

            return event;
        });
    }
});
