import CardGallery from "./CardGallery.js";
import storeItems from "../data/items.json";
import "./CardPanel.css";
import { Row, Col, Container } from "react-bootstrap";

const CardPanel = () => {
  return (
    <Container>
      <Row>
        <h4>featured</h4>
      </Row>

      <Row className="justify-content-center">
        {storeItems.map((item) => (
          <Col  key={item.id}>
            <CardGallery {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardPanel;
