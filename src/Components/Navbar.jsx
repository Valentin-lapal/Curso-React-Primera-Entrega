import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'




function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Líverval</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nostros</Nav.Link>
            <NavDropdown title="Categoría" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Calzados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Camisas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Remeras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Pantalones
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;