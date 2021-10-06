import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { leerDeLocalStorage } from '../utils/localStorage';

export const NavRB = ({ user }) => {
const tokenLocal = leerDeLocalStorage('token') || {};

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact activeClassName="text-white">Memes</Nav.Link>

                        {!tokenLocal.token && <Nav.Link as={NavLink} to="/login" exact activeClassName="text-white">Login</Nav.Link>}

                        <Nav.Link as={NavLink} to="/perfil" exact activeClassName="text-white"> Perfil</Nav.Link>

                        {user.role === 'admin' && <Nav.Link as={NavLink} to="/admin" exact activeClassName="text-white">Subir nuevo meme</Nav.Link>}

                        {!tokenLocal.token && <Nav.Link as={NavLink} to="/Register" exact activeClassName="text-white">Registro</Nav.Link>}

                        {tokenLocal.token && <Button onClick={logout} >Logout</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
