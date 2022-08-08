import { useEventList, useUpdateEvent } from 'hooks/eventHooks';
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend';
import 'kalend/dist/styles/index.css';
import style from './Calendar.module.scss';

interface IKalendEvent {
    id: number,
    startAt: string
    endAt: string
    summary: string
    color: string,
}

export default function Calendar() {
    const kalendEvent = new Map<string, IKalendEvent[]>();
    const events = useEventList();
    const updateEvent = useUpdateEvent();

    events.forEach(event => {
        const key = event.start.toISOString().slice(0, 10);

        if (kalendEvent.has(key) === false) {
            kalendEvent.set(key, []);
        }

        kalendEvent.get(key)?.push({
            id: event.id,
            startAt: event.start.toISOString(),
            endAt: event.end.toISOString(),
            summary: event.description,
            color: 'green'
        });
    });

    const onEventDragFinish: OnEventDragFinish = (
        prevKalendEvent: CalendarEvent,
        updatedKalendEvent: CalendarEvent,
    ) => {
        updateEvent({
            id: updatedKalendEvent.id,
            start: new Date(updatedKalendEvent.startAt),
            end: new Date(updatedKalendEvent.endAt),
            description: updatedKalendEvent.summary,
        });
    };

    return (
        <div className={style.container}>
            <Kalend
                events={Object.fromEntries(kalendEvent)}
                initialDate={new Date().toISOString()}
                hourHeight={60}
                initialView={CalendarView.WEEK}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                calendarIDsHidden={['work']}
                onEventDragFinish={onEventDragFinish}
            />
        </div>
    );
}
