import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { NavRB } from './components/NavRB';
import Memes from './pages/Memes';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Perfil from './pages/Perfil';
import { useState } from 'react';
import { leerDeLocalStorage } from './utils/localStorage';

const memesLocal = leerDeLocalStorage('memes') || [];

function App() {
    const [memes, setMemes] = useState(memesLocal);

    return (
        <div className="footer-fix">
            <NavRB />

            <Container>
                <Switch>
                    <Route path="/" exact>
                        <Memes memes={memes} />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/admin">
                        <Admin memes={memes} setMemes={setMemes} />
                    </Route>

                    <Route path="/perfil">
                        <Perfil/>
                    </Route>

                    <Route path="/404">
                        404
                    </Route>

                    <Route path="*">
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
