import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
        {['lg'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3" id='navBarPrincipal'>
            <Container fluid>
              <Navbar.Brand href="#">
                <Link to={"/"}>
                  <img src="/LogoIconic.png" alt="" className='logoPrincipal' />  Iconic
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle id='navBarBoton' aria-controls={`offcanvasNavbar-expand-${expand}`} />

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Link to={"/"}>
                      <img src="/LogoIconic.png" alt="" className='logoPrincipal' />  Iconic
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>
                      <Link className='navBarHeader__link' to={"/"}>Inicio</Link>
                    </Nav.Link>

                    <Nav.Link>
                      <Link className='navBarHeader__link' to={"/productos/electronica"}>Electronica</Link>
                    </Nav.Link>

                    <Nav.Link>
                      <Link className='navBarHeader__link' to={"/productos/joyeria"}>Joyeria</Link>
                    </Nav.Link>

                    <Nav.Link>
                      <Link className='navBarHeader__link' to={"/productos/ropa"}>Ropa</Link>
                    </Nav.Link>

                    <Nav.Link href="#action5">
                      <CartWidget />
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
    </>
  );
}

export default OffcanvasExample;