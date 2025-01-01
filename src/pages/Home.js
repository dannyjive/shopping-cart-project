import React from "react";
import Carousel from "../components/Carousel";
import CardPanel from "../components/CardPanel";
import "../components/CardPanel.css";
import { Store } from "./Store";

export function Home() {

  return (
    <>
      <Carousel />
      <CardPanel />
    </>
  );
}
