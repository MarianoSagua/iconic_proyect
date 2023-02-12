import {Button} from 'react-bootstrap';
import NavBar from "./NavBar";

const Header = () => {
  const isHeader = true;

  return (
    <>
      <div className='contenedorHeader'>
        <NavBar isHeader={isHeader} />
      </div>
    </>
  )
}

export default Header;