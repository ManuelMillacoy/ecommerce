import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Punto Manzana</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
                            <Nav.Link href="#vendenos">Quiero Vender</Nav.Link>
                            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">iPhone</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">iPad</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">MacBook</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Watch</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <CartWidget />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
