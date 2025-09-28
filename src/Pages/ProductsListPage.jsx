// ProductsListPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchProductsListUser,
} from "../Redux/usersActions/usersAction";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";

const ProductsListPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducer.products);
  const token = useSelector((state) => state.authReducer.jwtToken);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  

  useEffect(() => {
    dispatch(fetchProductsListUser());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">🛍️ Products</h2>
      <Row className="g-4">
        {data.map((item) => (
          <Col key={item._id} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow-sm h-100 product-card">
              <Card.Img
                variant="top"
                src={item.image}
                className="product-img" height={250} width={500}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{item?.title}</Card.Title>
                <Card.Text className="text-muted small mb-3">
                  {item?.description?.slice(0, 50)}...
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-primary">₹ {item.price}</span>
                  {isLoggedIn?<Button
                    variant="success"
                    size="sm"
                    onClick={() => dispatch(addToCart(item._id, token))}
                  >
                    Add to Cart
                  </Button>: <Button onClick={()=>toast('Login first')}>Add to cart</Button>}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsListPage;
