// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function OffcanvasExample() {
//   return (
//     <>
//       {['lg'].map((expand) => (
//         <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">Iconic</Navbar.Brand>

//             <Navbar.Toggle id='navBarBoton' aria-controls={`offcanvasNavbar-expand-${expand}`} />

//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Iconic
//                 </Offcanvas.Title>
//               </Offcanvas.Header>

//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Inicio</Nav.Link>
//                   <Nav.Link href="#action2">Remeras</Nav.Link>
//                   <Nav.Link href="#action3">Pantalones</Nav.Link>
//                   <Nav.Link href="#action4">Zapatillas</Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default OffcanvasExample;

import React from 'react'
import NavPrincipal from "./NavPrincipal"

const NavBar = (props) => {
  if(props.isHeader){
    return (
      <>
        <NavPrincipal />
      </>
    )
  }else{
    return (
      <nav className='navbarFooter'>
        <a href="#">{props.textLinkFooter}</a>
        <a href="#">{props.textLinkFooterTwo}</a>
        <a href="#">{props.textLinkFooterThree}</a>
      </nav>
    )
  }
}

export default NavBar