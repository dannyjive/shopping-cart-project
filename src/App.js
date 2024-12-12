
import Header from "./components/Header";
import React from 'react';
import Carousel from "./components/Carousel.js";
import bannercart from './imgs/bannercart.jpg';
import bannercart2 from './imgs/bannercart2.jpg';
import CardPanel from "./components/CardPanel";
import "./components/CardPanel.css";
import Footer from "./components/Footer";


// Create your branch: "git checkout -b your-branch-name"
// Add your changes to git-local: "git add ."
// Commit your changes to git-local: "git commit -m 'add message here' "
// Update your branch: "git push -u origin your-branch-name"
// Pull latest repo before working on new stuff: 'git pull origin main'


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
