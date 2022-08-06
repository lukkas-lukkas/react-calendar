import React, { useState } from 'react';
import style from './Form.module.scss';

export default function Form() {
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startHour, setStartHour] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endHour, setEndHour] = useState('');

    function formSubmeter(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(description, startDate, startHour, endDate, endHour);
    }

    return (
        <form className={style.form} onSubmit={formSubmeter}>
            <h3 className={style.title}> New event </h3>

            <label> Description </label>
            <input
                type="text"
                name="description"
                id="description"
                className={style.input}
                onChange={evento => setDescription(evento.target.value)}
                placeholder="Description" value={description}
                autoComplete="off"
                required
            />

            <label> Start date </label>
            <div className={style.inputContainer}>
                <input
                    type="date"
                    name="startDate"
                    className={style.input}
                    onChange={evento => setStartDate(evento.target.value)}
                    value={startDate}
                    required
                />
                <input
                    type="time"
                    name="startHour"
                    className={style.input}
                    onChange={evento => setStartHour(evento.target.value)}
                    value={startHour}
                    required
                />
            </div>

            <label> End date </label>
            <div className={style.inputContainer}>
                <input
                    type="date"
                    name="endDate"
                    className={style.input}
                    onChange={evento => setEndDate(evento.target.value)}
                    value={endDate}
                    required
                />
                <input
                    type="time"
                    name="endHour"
                    className={style.input}
                    onChange={evento => setEndHour(evento.target.value)}
                    value={endHour}
                    required
                />
            </div>

            <button className={style.button}>
                Save
            </button>
        </form>
    );
}
