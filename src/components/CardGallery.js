import cartImg from "../imgs/addToCart.png";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CardGallery = ({ id, name, price, imgUrl }) => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <>
      <div className="card card-custom border p-1 m-2 shadow" key={id}>
        <img className="card-img-top" src={imgUrl} alt={name} />
        <div className="card-body d-flex flex-column">
          <h5>{name}</h5>
          <div className="btnContainer mt-auto">
            <button
              className="btn-custom btn-light rounded-pill"
              onClick={() => increaseCartQuantity(id)}
            >
              ${price}{" "}
              <img 
                className="cart-icon"
                src={cartImg}
                alt="shopping cart icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGallery;
