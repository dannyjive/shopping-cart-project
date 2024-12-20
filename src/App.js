import React from 'react';
import Header from './components/Header.js'
import Footer from "./components/Footer.js";
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Home } from "./pages/Home.js";
import { Store } from "./pages/Store.js";
import { About } from "./pages/About.js";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.js";

function App() {

  return (
    <ShoppingCartProvider>
      <Header />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
