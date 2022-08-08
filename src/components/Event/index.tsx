import IEvent from 'interfaces/IEvent';
import style from './Event.module.scss';

export default function Event({ event }: { event: IEvent }) {
    function removeEvent(event: IEvent) {
        alert('Remove event => ' + event.description);
    }

    return (
        <div className={style.event}>
            <div className="cards-info">
                <h3 className={style.description}>{event.description} - {event.start.toLocaleDateString()}</h3>
            </div>
            <i className="far fa-times-circle fa-2x" onClick={() => removeEvent(event)}></i>
        </div>
        
    );
}
