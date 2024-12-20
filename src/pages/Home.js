import React from "react";
import Carousel from "../components/Carousel";
import CardPanel from "../components/CardPanel";
import bannercart from '../imgs/bannercart.jpg';
import bannercart2 from '../imgs/bannercart2.jpg';
import '../components/CardPanel.css'

export function Home() {
    
    const images = [
        bannercart,
        bannercart2,
      ];
    
    return (
    <>
        <Carousel images={images} />
        <CardPanel />

    </>
    )
}

