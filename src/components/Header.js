import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <div>
        <Navbar className='bg-dark text-light'>
            <NavbarBrand>
                Our Shopping Cart App
            </NavbarBrand>
        </Navbar>
    </div>
  )
}

export default Header
