import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavRB = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact activeClassName="text-white"> Memes</Nav.Link>
                        <Nav.Link as={NavLink} to="/login" exact activeClassName="text-white"> Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/perfil" exact activeClassName="text-white"> Perfil</Nav.Link>
                        <Nav.Link as={NavLink} to="/admin" exact activeClassName="text-white"> Subir nuevo meme</Nav.Link>
                        {/* <Nav.Link onClick={() => props.setSeccion('memes')}>Memes</Nav.Link>
                        <Nav.Link onClick={() => props.setSeccion('login')}>Login</Nav.Link>
                        <Nav.Link onClick={() => props.setSeccion('perfil')}>Perfil</Nav.Link>
                        <Nav.Link onClick={() => props.setSeccion('admin')}>Subir nuevo meme</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
