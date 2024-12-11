import cartImg from "../imgs/addToCart.png";

const CardGallery = (props) => {
  return (
    <>
      <div className="card bg-white border p-1  m-2 shadow " key={props.index}>
        <img className="card-img-top" src={props.image} alt={props.name} />
        <div class="card-body d-flex flex-column">
          <h5>{props.name}</h5>
          <p>{props.descrip}</p>
          <div className="btnContainer mt-auto">
            <button className="btn-custom btn-light rounded-pill">
              ${props.prices}{" "}
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
