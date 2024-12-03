function ItemCard(props){
    return (
        <div className="bg-light border p-4 m-2">
            <h4>{props.item.name}</h4> 
            <p>Qty: {props.item.quantity}</p>
        </div>
    )
}

export default ItemCard;