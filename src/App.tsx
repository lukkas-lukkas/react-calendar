import style from './App.module.scss';
import Card from './components/Card';
import Form from './components/Form';

export default function App() {
    return (
        <div className={style.app}>
            <Card>
                <Form />
            </Card>
        </div>
    );
}
