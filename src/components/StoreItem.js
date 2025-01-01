import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import cartImg from "../imgs/addToCart.png";

export function StoreItem({ id, name, price, imgUrl }) {
  const { increaseCartQuantity } = useShoppingCart();
  // const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} style={{ height: "200px" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{name}</span>
        </Card.Title>
        <div className="mt-auto">
          <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
            <span className="ms-2 text-muted" style={{ fontSize: "15px" }}>
              {formatCurrency(price)}
            </span>
            <img className="cart-icon" src={cartImg} alt="shopping cart icon" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
