import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavRB } from './components/TheNav';
import { Container } from 'react-bootstrap';
import Noticias from './components/Noticias';

function App() {
    return (
        <div>
            <NavRB />
            <Container>
                <Noticias />
            </Container>
        </div>
    );
}

export default App;
