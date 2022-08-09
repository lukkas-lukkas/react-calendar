import IEvent from 'interfaces/IEvent';

export default function EventCheckbox({ event }: { event: IEvent }) {

    const isDone = false;

    const styles = [
        'far',
        'fa-2x',
        isDone ? 'fa-check-square' : 'fa-square',
    ];

    return (
        <i className={styles.join(' ')}></i>
    );
}
