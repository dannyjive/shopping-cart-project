import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import trash from "../../src/imgs/trashcan.png";

export function CartItem({ id, quantity }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center"
      style={{
        backgroundColor: "#ffe8cf",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src={`${process.env.PUBLIC_URL}/${item.imgUrl}`} style={{ width: "100px", objectFit: "cover" }} alt={item.name}/>

      <div className="d-flex flex-row me-auto">
        <div>
          <h6>{item.name}</h6>
          <p>${item.price}/each</p>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="d-flex flex-column align-items-center">
          <Button
            variant="link"
            style={{ textDecoration: "none" }}
            onClick={() => increaseCartQuantity(id)}
            className="arrow-btn"
          >
            &#9650;
          </Button>

          <span
            style={{ backgroundColor: "white", width: "25px", height: "25px" }}
            className="d-flex justify-content-center align-items-center fs-5"
          >
            {quantity}
          </span>

          <Button
            variant="link"
            style={{ textDecoration: "none" }}
            onClick={() => decreaseCartQuantity(id)}
            className="arrow-btn"
          >
            &#9660;
          </Button>
        </div>
      </div>

      <div>{formatCurrency(item.price * quantity)}</div>

      <img
        src={trash}
        style={{ width: "20px", cursor: "pointer" }}
        onClick={() => removeFromCart(item.id)}
      />
    </Stack>
  );
}
