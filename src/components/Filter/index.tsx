import useSetFilter from 'hooks/filterHooks';
import IFilter from 'interfaces/IFilter';
import { useState } from 'react';
import style from './Filter.module.scss';

export default function Filter() {
    const [date, setDate] = useState('');

    const setFilter = useSetFilter();

    function submeterForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const filter: IFilter = {};

        if (date) {
            filter.date = new Date(date);
        } else {
            filter.date = null;
        }

        setFilter(filter);
    }

    return (
        <form className={style.filter} onSubmit={submeterForm}>
            <h3 className={style.title}>Filter by date</h3>
            <input
                type="date"
                name="date"
                className={style.input}
                onChange={event => setDate(event.target.value)}
                placeholder="By date"
                value={date}
            />

            <button className={style.button}>
                Filter
            </button>

        </form>
    );
}
