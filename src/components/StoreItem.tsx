import React from "react";
import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency.tsx";
import { useShoppingCart } from '../context/ShoppingCartContext.tsx'

type StoreItemProps = {
    id: number,
    name: string, 
    price: number, 
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
    
    return (
    <Card className='h-100'>
        <Card.Img 
            variant='top' 
            src={imgUrl} 
            style={{ height: '200px' }}
        />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='fs-4'>{name}</span>
                <span className='ms-2 text-muted' style={{ fontSize: '15px'}}>{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
                {quantity === 0 ? (
                    <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ To Cart</Button>
                ) : <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem'}}>
                    <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem'}}>
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className='fs-3'>{quantity}</span> in Cart
                        </div>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button onClick={() => removeFromCart(id)} className='btn-danger' size='sm'>Remove</Button>
                    </div>}
            </div>
        </Card.Body>
    </Card>
    )
}