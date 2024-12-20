import React from 'react';

import Header from './components/Header.js'
import Footer from "./components/Footer.js";
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Home } from "./pages/Home.js";
import { Store } from "./pages/Store.js";
import { About } from "./pages/About.js";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.js";

// import Carousel from "./components/Carousel.js";
// import bannercart from './imgs/bannercart.jpg';
// import bannercart2 from './imgs/bannercart2.jpg';
// import CardPanel from "./components/CardPanel";
// import Footer from "./components/Footer";


// Create your branch: "git checkout -b your-branch-name"
// Add your changes to git-local: "git add ."
// Commit your changes to git-local: "git commit -m 'add message here' "
// Update your branch: "git push -u origin your-branch-name"
// Pull latest repo before working on new stuff: 'git pull origin main'


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
