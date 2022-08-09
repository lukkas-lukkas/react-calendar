import IEvent from 'interfaces/IEvent';
import IFilter from 'interfaces/IFilter';
import { atom } from 'recoil';
import { apiEvents } from './selector';

export const stateEventsList = atom<IEvent[]>({
    key: 'stateEventsList',
    default: apiEvents,
});

export const stateFilter = atom<IFilter>({
    key: 'stateFilter',
    default: {},
});
