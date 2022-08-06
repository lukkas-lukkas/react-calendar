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
