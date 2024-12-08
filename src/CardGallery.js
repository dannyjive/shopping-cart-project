import cartImg from './imgs/addToCart.png';






const CardGallery = (props) => {
    return (
        
        
        // <div className="col d-flex">
            <div className="card bg-white border p-1  m-2 shadow "  key={props.index}>
                <img className='card-img-top' src={props.image} alt={props.name} />
                <div class='card-body d-flex flex-column' >
                    <h5>{props.name}</h5>
                    <p>{props.descrip}</p>
                    {/* <div className='card-footer  '> */}
                        <button className="btn btn-outline-secondary mt-auto">{props.prices}<img className="cart-icon" src={cartImg} alt='shopping cart icon'/></button>
                    {/* </div> */}
                </div>
            </div>
        // </div>
        
    );
}

export default CardGallery
