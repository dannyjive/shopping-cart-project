import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json';
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

export function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item == null) return null;

    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.imgUrl} style={{ width: '100px', objectFit: 'cover' }} />
            <div className='me-auto'>
                <div>
                    {item.name}{' '}
                    {quantity > 0 &&
                        <span className='text-muted' style={{ fontSize: '.65rem' }}>
                            x{quantity}
                        </span>}
                </div>
                <div className='text-muted' style={{ fontSize: '.75rem' }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    );
}
