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

const memes = [
    { urlToImage: '', title: 'meme1'},
    { urlToImage: '', title: 'meme2'},
    { urlToImage: '', title: 'meme3'},
]

function App() {
    const [seccion, setSeccion] = useState('perfil');

    return (
        <div className="footer-fix">
            <NavRB setSeccion={setSeccion} />

            <Container>
                {seccion === 'memes' && <Memes memes={memes} />}

                {seccion === 'login' && <Login />}

                {seccion === 'admin' && <Admin />}

                {seccion === 'perfil' && <Perfil />}
            </Container>
            <Footer />
        </div>
    );
}

export default App;
