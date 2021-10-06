import { Container, Spinner } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { NavRB } from './components/NavRB';
import Memes from './pages/Memes';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Perfil from './pages/Perfil';
import { useEffect, useState } from 'react';
import { leerDeLocalStorage } from './utils/localStorage';
import DetalleMeme from './pages/DetalleMeme';
import axios from 'axios';
import Register from './pages/Register';

function App() {
    const [memes, setMemes] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const requestUserData = async () => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};

        if (tokenLocal.token) {
            const headers = { 'x-auth-token': tokenLocal.token };
            const response = await axios.get('http://localhost:4000/api/auth', { headers });
            setUser(response.data);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        requestUserData();
    }, []);

    useEffect(() => {
        const request = async () => {
            const response = await axios.get('http://localhost:4000/api/memes');
            setMemes(response.data);
        };
        request();
    }, []);

    const isAdmin = user.role === 'admin';

    if (isLoading) {
        return (
            <>
                Cargando...
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        );
    }

    return (
        <div className="footer-fix">
            <NavRB user={user} />

            <Container>
                <Switch>
                    <Route path="/" exact>
                        <Memes memes={memes} />
                    </Route>

                    <Route path="/login">
                        <Login requestUserData={requestUserData} />
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

                    <Route path="/register">
                        <Register />
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
