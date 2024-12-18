import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import cart from '../imgs/emptyCart.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                    style={{ width: '3rem', height: '3rem', position: 'relative' }} 
                    variant='outline-light'
                    className='rounded-circle m-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                    >
                    <path d="M29.4 8.85A2.48 2.48 0 0 0 27.53 8H14a1 1 0 0 0 0 2h13.53a.47.47 0 0 1 .36.16.48.48 0 0 1 .11.36l-1.45 10a1.71 1.71 0 0 1-1.7 1.48H14.23a1.72 1.72 0 0 1-1.68-1.33L10 8.79l-.5-1.92A3.79 3.79 0 0 0 5.82 4H3a1 1 0 0 0 0 2h2.82a1.8 1.8 0 0 1 1.74 1.36L8 9.21l2.6 11.88A3.72 3.72 0 0 0 14.23 24h10.62a3.74 3.74 0 0 0 3.68-3.16l1.45-10a2.45 2.45 0 0 0-.58-1.99zM16 25h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM25 25h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
                    </svg>
                    <div 
                    className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
                    style={{ 
                        color: 'white', 
                        width: '1.5rem', 
                        height: '1.5rem', 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        transform: 'translate(30%, 30%)'}}>3</div>
                </Button>
            </Container>
        </Navbar>
    )
}

export default Header
