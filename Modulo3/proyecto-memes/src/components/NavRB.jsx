import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavRB = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => props.setSeccion('memes')}>Memes</Nav.Link>
                        <Nav.Link onClick={() => props.setSeccion('login')}>Login</Nav.Link>
                        <Nav.Link onClick={() => props.setSeccion('perfil')}>Perfil</Nav.Link>
                        <Nav.Link onClick={() => props.setSeccion('admin')}>Subir nuevo meme</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
