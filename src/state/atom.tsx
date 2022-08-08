import IEvent from 'interfaces/IEvent';
import { atom } from 'recoil';

export const stateEventsList = atom<IEvent[]>({
    key: 'stateEventsList',
    default: [
        {
            id: 1,
            start: new Date('2022-08-08T05:00'),
            end: new Date('2022-08-08T06:00'),
            description: 'Summary state',
        },
        {
            id: 2,
            start: new Date('2022-08-08T08:00'),
            end: new Date('2022-08-08T09:00'),
            description: 'Summary state 2',
        }
    ] as IEvent[]
});
