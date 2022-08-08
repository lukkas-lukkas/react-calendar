import IEvent from 'interfaces/IEvent';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { stateEventsList } from 'state/atom';

export function useEventList(): IEvent[] {
    return useRecoilValue(stateEventsList);
}

export function useAddEvent() {
    const setStateEventList = useSetRecoilState(stateEventsList);

    return (event: IEvent) => {
        setStateEventList(oldEvents => [...oldEvents, event]);
    };
}

export function useUpdateEvent() {
    const setStateEventList = useSetRecoilState(stateEventsList);

    return (event: IEvent) => {
        setStateEventList(oldEvents => {
            return oldEvents.map(eventItem => {
                if (eventItem.id === event.id) {
                    return event;
                }

                return eventItem;
            });
        });
    };
}