import style from './App.module.scss';
import Card from './components/Card';

export default function App() {
    return (
        <div className={style.app}>
            <Card>
                Teste
            </Card>
        </div>
    );
}
