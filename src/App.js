import Carousel from "./components/Carousel.js";
import bannercart from './imgs/bannercart.jpg';
import bannercart2 from './imgs/bannercart2.jpg';
import CardPanel from "./components/CardPanel";
import "./components/CardPanel.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Home } from "./pages/Home.js";
import { Store } from "./pages/Store.js";
import { About } from "./pages/About.js";

function App() {

  const images = [
    bannercart,
    bannercart2,
  ];

  return (
    <>
      <Header />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
      <Carousel images={images} />
      <CardPanel />
      <Footer />
        
    </>
  );
}

export default App;
