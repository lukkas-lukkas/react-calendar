import IEvent from 'interfaces/IEvent';
import { atom } from 'recoil';

export const stateEventsList = atom<IEvent[]>({
    key: 'stateEventsList',
    default: [
        {
            id: 1,
            start: new Date('2022-08-06T12:00'),
            end: new Date('2022-08-06T13:00'),
            description: 'Summary state',
        }
    ] as IEvent[]
});
