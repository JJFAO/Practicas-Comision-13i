import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavRB } from './components/NavRB';
import { Container } from 'react-bootstrap';
import Memes from './pages/Memes';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Perfil from './pages/Perfil';
import { useState } from 'react';
import { leerDeLocalStorage } from './utils/localStorage';

const memesLocal = leerDeLocalStorage('memes') || [];

function App() {
    const [seccion, setSeccion] = useState('memes');
    const [memes, setMemes] = useState(memesLocal);

    return (
        <div className="footer-fix">
            <NavRB setSeccion={setSeccion} />

            <Container>
                {seccion === 'memes' && <Memes memes={memes} />}

                {seccion === 'login' && <Login />}

                {seccion === 'admin' && <Admin memes={memes} setMemes={setMemes} />}

                {seccion === 'perfil' && <Perfil />}
            </Container>
            <Footer />
        </div>
    );
}

export default App;
