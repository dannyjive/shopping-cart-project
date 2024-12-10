import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Header = () => {
  return (
    <>
        <Navbar className='navbar justify-content-between p-3'>
            <NavbarBrand className='navbar-brand fs-2 p-0 m-0'>
                Our Shopping Cart App
            </NavbarBrand>
            <ul>
                <li>
                    <a href='#'>sign in</a>
                </li>
                <li>
                    <a href='#'>shopping cart</a>
                </li>
            </ul>
        </Navbar>
        <div className='menu-div d-flex justify-content-center gap-5'>
            <a href='#'>menu</a>
            <a href='#'>menu</a>
            <a href='#'>menu</a>
            <a href='#'>menu</a>
        </div>
    </>
  )
}

export default Header
