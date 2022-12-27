import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className='containerMenu'>
          <Navbar.Brand href="#home">Iconic</Navbar.Brand>

          <Nav className="me-auto containerMenu__links">
            <Nav.Link href="#home" className='containerMenu__links--item'>Inicio</Nav.Link>
            <Nav.Link href="#shirts" className='containerMenu__links--item'>Remeras</Nav.Link>
            <Nav.Link href="#pants" className='containerMenu__links--item'>Pantalones</Nav.Link>
            <Nav.Link href="#shoes" className='containerMenu__links--item'>Zapatillas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;