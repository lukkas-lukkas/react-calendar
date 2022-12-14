import { useDeleteEvent } from 'hooks/eventHooks';
import IEvent from 'interfaces/IEvent';
import style from './Event.module.scss';
import EventCheckbox from './EventCheckbox';

export default function Event({ event }: { event: IEvent }) {
    const deleteEvent = useDeleteEvent();

    function removeEvent(event: IEvent) {
        if (confirm('Do you want to delete the event?')) {
            deleteEvent(event);
        }
    }

    return (
        <div className={style.event}>

            <div className={style.descriptionBox}>
                <EventCheckbox event={event} />
                <h3 className={style.description}>{event.description} - {event.start.toLocaleDateString()}</h3>
            </div>
            <i className={`far fa-times-circle fa-2x ${style.icon}`} onClick={() => removeEvent(event)}></i>
        </div>

    );
}
