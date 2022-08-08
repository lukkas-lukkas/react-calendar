import { RecoilRoot } from 'recoil';
import style from './App.module.scss';
import Calendar from './components/Calendar';
import Card from './components/Card';
import Form from './components/Form';
import EventList from './components/EventList';

export default function App() {
    return (
        <RecoilRoot>
            <div className={style.app}>
                <Card>
                    <Form />
                    <EventList />
                </Card>
                <Calendar />
            </div>
        </RecoilRoot>
    );
}
