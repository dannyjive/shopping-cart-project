import cartImg from './imgs/addToCart.png';




const CardGallery = (props) => {
    return (
        <div className="row ">
        <div className="col ">
            <div className="card bg-light border p-4 m-2 " style={{ width: '12rem' }}>
                <img className='card-img-top' src={props.image} alt={props.name} />
                <div class='card-body'>
                    <h5>{props.name}</h5>
                    <p>{props.descrip}</p>
                    <button className="btn btn-primary">{props.prices}<img src={cartImg}/></button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CardGallery
