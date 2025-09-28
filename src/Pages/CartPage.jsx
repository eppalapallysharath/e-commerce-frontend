import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, deleteFromCart } from '../Redux/usersActions/usersAction';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.userReducer);
  const token = useSelector(state => state.authReducer.jwtToken);

  useEffect(() => {
    if (token) dispatch(fetchCart(token));
  }, [dispatch, token]);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ color: '#0d6efd', fontWeight: '700' }}>
        My Cart 🛒
      </h2>

      <Row className="g-4">
        {cart?.data?.length > 0 ? (
          cart.data.map(item => (
            item.productId && (
              <Col key={item._id} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow-sm cart-card" style={{ borderRadius: '12px' }}>
                  <Card.Img
                    variant="top"
                    src={item.productId.image || 'https://via.placeholder.com/200'}
                    className="cart-img"
                    style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1f2937' }}>
                      {item.productId.title || 'No Title'}
                    </Card.Title>
                    <Card.Text className="text-muted mb-1">
                      Quantity: <strong>{item.quantity}</strong>
                    </Card.Text>
                    <Card.Text className="text-muted mb-3">
                      Price: <strong>₹{item.price?.toLocaleString() || 0}</strong>
                    </Card.Text>
                    <Button
                      variant="danger"
                      className="mt-auto"
                      style={{ borderRadius: '8px', fontWeight: '500', transition: 'all 0.2s' }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = '#c82333')}
                      onMouseOut={(e) => (e.target.style.backgroundColor = '#dc3545')}
                      onClick={() => dispatch(deleteFromCart(item.productId._id, token))}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          ))
        ) : (
          <p className="text-center mt-5" style={{ fontSize: '1.2rem', color: '#6c757d' }}>
            Your cart is empty 😔
          </p>
        )}
      </Row>
    </Container>
  );
};

export default CartPage;
