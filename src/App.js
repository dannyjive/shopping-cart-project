import ItemCard from "./ItemCard";

const checkoutItems = [
  {
    id: 0,
    name: 'Red Cart',
    quantity: 2
  },
  {
    id: 1,
    name: 'Green Cart',
    quantity: 1
  },
  {
    id: 2,
    name: 'Blue Cart',
    quantity: 1
  },
  {
    id: 3,
    name: 'Chrome Cart',
    quantity: 1
  }
]

function App() {
  return (
    <div>
      <h1>Our Shopping Cart App</h1>
      {checkoutItems.map((i)=> <ItemCard item={i} /> )}
    </div>
  );
}

export default App;
