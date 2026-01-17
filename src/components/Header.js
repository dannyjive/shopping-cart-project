import { useState } from "react";
import { Button, Container, Nav, Navbar, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Formik, Field, ErrorMessage } from "formik";
import { validateUserLoginForm } from "../utils/validateUserLoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import cart from "../imgs/emptyCart.png";

const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = (values) => {
    console.log("Login values:", values);
  };

  return (
    <>
      <Navbar
        sticky="top"
        bg="white"
        className="shadow-sm justify-content-between p-3"
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              to="/"
              as={NavLink}
              style={{ color: "#2c6fb6", fontSize: 30 }}
            >
              Pokemon Center
            </Nav.Link>
          </Nav>
          <Button
            variant="link"
            style={{ color: "#2c6fb6", textDecoration: "none" }}
            onClick={handleShow}
          >
            sign In
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ borderBottom: "none" }}>
              <Modal.Title>Welcome!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={handleLogin}
                validate={validateUserLoginForm}
              >
                <Form>
                  <Form.Group>
                    <Form.Label htmlFor="username">User Name</Form.Label>
                    <Field
                      id="username"
                      name="username"
                      placeholder="username"
                      className="form-control"
                    />
                    <ErrorMessage name="username">
                      {(msg) => <p className="text-danger">{msg}</p>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label 
                    htmlFor="password" >Password</Form.Label>
                    <Field
                      id="password"
                      name="password"
                      placeholder="password"
                      type="password"
                      className="form-control"
                    />
                  </Form.Group>
                  <ErrorMessage name="password">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Form>
              </Formik>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <Button type="submit" variant="primary">
                Login
              </Button>
            </Modal.Footer>
          </Modal>

          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-light"
            className="rounded-circle m-2"
          >
            <img
              className="emptyShoppingCart"
              src={cart}
              alt="shopping cart icon"
            />
            {cartQuantity > 0 && (
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(30%, 30%)",
                }}
              >
                {cartQuantity}
              </div>
            )}
          </Button>
        </Container>
      </Navbar>
      <Navbar bg="warning" className="p-3" style={{ height: "50px" }}>
        <Container className="d-flex justify-content-center">
          <Nav className="gap-5">
            <Nav.Link to="/store" as={NavLink}>
              Menu 1
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Menu 2
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Menu 3
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Menu 4
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
