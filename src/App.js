
import Header from "./components/Header";
import React from 'react';
import Carousel from "./components/Carousel.js";
import bannercart from './imgs/bannercart.jpg';
import bannercart2 from './imgs/bannercart2.jpg';
import CardPanel from "./components/CardPanel";
import "./components/CardPanel.css";
import Footer from "./components/Footer";






function App() {

  const images  = [
     bannercart ,
    bannercart2,
  ];

  return (

    <div>

      <>
        <Header />
      </>

      <>
        <Carousel images={images} />
      </>

      <>
        <CardPanel />
      </>

      <>
        <Footer />
      </>



    </div>

  );
}

export default App;
