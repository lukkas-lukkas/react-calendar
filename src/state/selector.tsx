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
