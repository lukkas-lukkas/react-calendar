import { useUpdateEvent } from 'hooks/eventHooks';
import IEvent from 'interfaces/IEvent';

export default function EventCheckbox({ event }: { event: IEvent }) {
    const updateEvent = useUpdateEvent();

    const styles = [
        'far',
        'fa-2x',
        event.done ? 'fa-check-square' : 'fa-square',
    ];

    function changeStatus() {
        const eventToUpdate = {...event};

        eventToUpdate.done = !eventToUpdate.done;

        updateEvent(eventToUpdate);
    }

    return (
        <i className={styles.join(' ')} onClick={changeStatus}></i>
    );
}
