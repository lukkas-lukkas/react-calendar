import IEvent from 'interfaces/IEvent';
import style from './Event.module.scss';

export default function Event({ event }: { event: IEvent }) {
    return (
        <div className={style.event}>
            <div className="cards-info">
                <h3 className={style.description}>{event.description} - {event.start.toLocaleDateString()}</h3>
            </div>
        </div>
    );
}
