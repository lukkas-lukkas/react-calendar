import clientHttp from 'http/index';
import ICreateEvent from 'interfaces/ICreateEvent';
import IEvent from 'interfaces/IEvent';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { stateEventsList } from 'state/atom';
import { filteredEvents } from 'state/selector';

export function useEventList(): IEvent[] {
    return useRecoilValue(filteredEvents);
}

export function useAddEvent() {
    const setStateEventList = useSetRecoilState(stateEventsList);

    return (event: ICreateEvent) => {
        clientHttp.post('/events', { ...event, done: false })
            .then(response => {
                const event: IEvent = response.data;

                setStateEventList(oldEvents => [...oldEvents, {
                    ...event,
                    start: new Date(event.start),
                    end: new Date(event.end),
                }]);
            }).catch(error => {
                alert('Error to create event');
            });
    };
}

export function useUpdateEvent() {
    const setStateEventList = useSetRecoilState(stateEventsList);

    return (event: IEvent) => {
        clientHttp.put(`/events/${event.id}`, event)
            .then(response => {
                const event: IEvent = response.data;

                setStateEventList(oldEvents => {
                    return oldEvents.map(eventItem => {
                        if (eventItem.id === event.id) {
                            return {
                                ...event,
                                start: new Date(event.start),
                                end: new Date(event.end),
                            };
                        }

                        return eventItem;
                    });
                });
            }).catch(error => {
                alert('Error to edit event');
            });
    };
}

export function useDeleteEvent() {

    const [events, setEvents] = useRecoilState(stateEventsList);

    return (event: IEvent) => {
        clientHttp.delete(`/events/${event.id}`)
            .then(() => {
                setEvents(() => {
                    return events.filter(eventItem => {
                        const result = event.id === eventItem.id;

                        return !result;
                    });
                });
            }).catch(error => {
                alert('Error to delete event');
            });
    };
}
