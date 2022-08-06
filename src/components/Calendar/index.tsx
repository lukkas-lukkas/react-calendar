import Kalend, { CalendarView } from 'kalend';
import 'kalend/dist/styles/index.css';
import IEvent from 'interfaces/IEvent';
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
    const events: IEvent[] = [
        {
            id: 1,
            start: new Date('2022-08-06T12:00'),
            end: new Date('2022-08-06T13:00'),
            description: 'Summary',
        }
    ];

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
            />
        </div>
    );
}
