import React from "react";
import storeItems from "../data/items.json";
import { Row, Col, Container } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <Container >
        <h2>featured</h2>
        <Row md={3} xs={2} lg={5} className="g-4">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
