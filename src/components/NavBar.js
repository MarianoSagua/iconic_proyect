import React from 'react'
import NavHeader from "./NavHeader"
import CartWidget from './CartWidget';

const NavBar = (props) => {

  if(props.isHeader == true){
    return (
      <NavHeader />
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