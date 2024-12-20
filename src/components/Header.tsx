import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import cart from '../imgs/emptyCart.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext.tsx';

const Header = () => {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <Navbar sticky='top' className='navbar bg-white shadow-sm justify-content-between p-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>The Pokemon Shop</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About Us</Nav.Link>
                </Nav>
                sign in
                
                <Button 
                    onClick={openCart}
                    style={{ width: '3rem', height: '3rem', position: 'relative' }} 
                    variant='outline-light'
                    className='rounded-circle m-2'
                    >
                    
                    <img className='emptyShoppingCart' src={ cart } alt='shopping cart icon'></img>
                    {cartQuantity > 0 && (
                        <div 
                            className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
                            style={{ 
                                color: 'white', 
                                width: '1.5rem', 
                                height: '1.5rem', 
                                position: 'absolute', 
                                bottom: 0, 
                                right: 0, 
                                transform: 'translate(30%, 30%)'}}>{cartQuantity}
                        </div>
                    )}
                </Button>
                
            </Container>
        </Navbar>
    )
}

export default Header
