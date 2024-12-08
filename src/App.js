import CardGallery from "./CardGallery";
import "./CardGallery.css";

//Import Images
import bluecart from "./imgs/bluecart.jpg";
import chromecart from "./imgs/chromecart.webp";
import greencart from "./imgs/greencart.jpg";
import orangecart from "./imgs/orangecart.webp";

//Shopping Cart Card Data -DF
const products = [
  {
    name: "Blue Shopping Cart",
    description:
      "This is the product description for the blue shopping cart. Lorem ipsum dolor sit amet.",
    image: bluecart,
    price: 19.99,
  },
  {
    name: "Orange Shopping Cart",
    description:
      "This is the product description for the orange shopping cart. Lorem ipsum dolor sit amet.",
    image: orangecart,
    price: 19.99,
  },
  {
    name: "Green Shopping Cart",
    description:
      "This is the product description for the green shopping cart. Lorem ipsum dolor sit amet.",
    image: greencart,
    price: 19.99,
  },
  {
    name: "Chrome Shopping Cart",
    description:
      "This is the product description for the chrome shopping cart. Lorem ipsum dolor sit amet.",
    image: chromecart,
    price: 19.99,
  },
];

//OLD Shopping Cart Card Data. May need for checkout modal? -DF
// const checkoutItems = [
//   {
//     id: 0,
//     name: 'Red Cart',
//     quantity: 2
//   },
//   {
//     id: 1,
//     name: 'Green Cart',
//     quantity: 1
//   },
//   {
//     id: 2,
//     name: 'Blue Cart',
//     quantity: 1
//   },
//   {
//     id: 3,
//     name: 'Chrome Cart',
//     quantity: 1
//   }
// ]

function App() {
  return (
    <div>
      <h1>Our Shopping Cart App</h1>
      <div className="row">
        <div className="col"></div>

        {/* CARD GALLERY */}
        <div className="col-10 d-flex flex-row card-custom">
          {products.map((index) => (
            <CardGallery
              key={index}
              descrip={index.description}
              name={index.name}
              image={index.image}
              prices={index.price}
            />
          ))}
        </div>
        
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
