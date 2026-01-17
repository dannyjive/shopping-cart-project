import { useState } from "react";
import { Offcanvas, Stack, Button, Modal } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json";
import CreditCardForm from "./CreditCardForm";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isCartEmpty = cartItems.length === 0;

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total: {formatCurrency(totalPrice)}
          </div>
          <>
            <Button
              variant="primary"
              onClick={handleShow}
              disabled={isCartEmpty}
              style={{
                backgroundColor: isCartEmpty ? "#cccccc" : "#007bff",
                color: isCartEmpty ? "#666666" : "#fff",
                cursor: isCartEmpty ? "not-allowed" : "pointer",
              }}
            >
              Checkout
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CreditCardForm />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Purchase
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
