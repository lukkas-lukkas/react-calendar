import { RecoilRoot } from 'recoil';
import style from './App.module.scss';
import Calendar from './components/Calendar';
import Card from './components/Card';
import Form from './components/Form';
import EventList from './components/EventList';
import { Suspense } from 'react';

export default function App() {
    return (
        <RecoilRoot>
            <Suspense fallback="Carregando">
                <div className={style.app}>
                    <Card>
                        <Form />
                        <EventList />
                    </Card>
                    <Calendar />
                </div>
            </Suspense>
        </RecoilRoot>
    );
}
