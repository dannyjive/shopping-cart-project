import Header from "./components/Header";
import CardPanel from "./components/CardPanel";
// import ItemCard from "./ItemCard";
import "./components/CardPanel.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <>
        <Header />
      </>

      {/* CAROUSEL  */}
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        [carousel placeholder]
      </h4>

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
