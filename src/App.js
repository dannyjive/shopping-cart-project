import React from 'react';
import Header from './components/Header.tsx'
import Footer from "./components/Footer.tsx";
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Home } from "./pages/Home.tsx";
import { Store } from "./pages/Store.tsx";
import { About } from "./pages/About.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";

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
