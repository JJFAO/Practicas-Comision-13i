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
import DetalleMeme from './pages/DetalleMeme';

const memesLocal = leerDeLocalStorage('memes') || [];
const userLocal = leerDeLocalStorage('user') || {};

function App() {
    const [memes, setMemes] = useState(memesLocal);
    const [user, setUser] = useState(userLocal);

    const isAdmin = user.role === 'admin';

    return (
        <div className="footer-fix">
            <NavRB user={user} />

            <Container>
                <Switch>
                    <Route path="/" exact>
                        <Memes memes={memes} />
                    </Route>

                    <Route path="/login">
                        <Login setUser={setUser} />
                    </Route>

                    {isAdmin && (
                        <Route path="/admin">
                            <Admin memes={memes} setMemes={setMemes} user={user} />
                        </Route>
                    )}

                    {isAdmin && (
                    <Route path="/perfil">
                        <Perfil />
                    </Route>
                    )}

                    <Route path="/meme/:memeId">
                        <DetalleMeme />
                    </Route>

                    <Route path="/404">404</Route>

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
