import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import cart from '../imgs/emptyCart.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Header = () => {
  return (
    <>
        <div className='row'>
            <div className='col'></div>
            <div className='col-10'>
                <Navbar className='navbar justify-content-between p-3'>
                    <NavbarBrand className='navbar-brand fs-2 p-0 m-0'>
                        Our Shopping Cart App
                    </NavbarBrand>
                    <ul>
                        <li>
                            <a href='#'>sign in</a>
                        </li>
                        <li>
                            <a href='#'><img className='emptyShoppingCart' src={ cart } alt='shopping cart icon'></img></a>
                        </li>
                    </ul>
                </Navbar>
            </div>
            <div className='col'></div>
        </div>
        <div className='row'>
                <div className='menu-div d-flex justify-content-center gap-5'>
                    <a href='#'>menu</a>
                    <a href='#'>menu</a>
                    <a href='#'>menu</a>
                    <a href='#'>menu</a>
                </div>
        </div>
        
    </>
  )
}

export default Header
