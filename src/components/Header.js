import {Button} from 'react-bootstrap';
import Nav from "./NavBar";

const Header = () => {

  const isHeader = true;

  return (
    <>
      <div className='contenedorHeader'>
        <Nav isHeader={isHeader} />
      </div>
    </>
  )
}

export default Header;