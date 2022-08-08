import Event from 'components/Event';
import Filter from 'components/Filter';
import { useEventList } from 'hooks/eventHooks';
import style from './EventList.module.scss';

export default function EventList() {
    const events = useEventList();

    return (
        <section>
            <Filter />
            <div className={style.scroll}>
                {events.map(event => (
                    <Event event={event} key={event.id} />
                ))}
            </div>
        </section>
    );
}
