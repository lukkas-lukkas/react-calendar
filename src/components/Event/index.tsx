import IEvent from 'interfaces/IEvent';
import style from './Event.module.scss';

export default function Event({ event }: { event: IEvent }) {
    return (
        <h1>{ event.description }</h1>
    );
}
