import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

// export const TheNav = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">
//                     Navbar
//                 </a>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">
//                                 Home
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">
//                                 Link
//                             </a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a
//                                 className="nav-link dropdown-toggle"
//                                 href="#"
//                                 id="navbarDropdown"
//                                 role="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 Dropdown
//                             </a>
//                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li>
//                                     <a className="dropdown-item" href="#">
//                                         Action
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="#">
//                                         Another action
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <hr className="dropdown-divider" />
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="#">
//                                         Something else here
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
//                                 Disabled
//                             </a>
//                         </li>
//                     </ul>
//                     <form className="d-flex">
//                         <input
//                             className="form-control me-2"
//                             type="search"
//                             placeholder="Search"
//                             aria-label="Search"
//                         />
//                         <button className="btn btn-outline-success" type="submit">
//                             Search
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// };

export const NavRB = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
