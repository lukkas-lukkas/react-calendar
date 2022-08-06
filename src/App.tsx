import style from './App.module.scss';
import Calendar from './components/Calendar';
import Card from './components/Card';
import Form from './components/Form';

export default function App() {
    return (
        <div className={style.app}>
            <Card>
                <Form />
            </Card>
            <Calendar />
        </div>
    );
}
