import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { deleteProduct, fetchProductsAdmin } from '../Redux/AdminActions/AdminActions';

const AdminProductsList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.adminReducer);
  const token = useSelector(state => state.authReducer.jwtToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchProductsAdmin(token));
    }
  }, [dispatch, token]);

  return (
    <Container className="mt-5">
      <h3 className="mb-4 text-center" style={{ color: '#0d6efd' }}>Products List</h3>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-lg" style={{ borderRadius: '12px', transition: 'transform 0.2s' }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: '220px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1f2937' }}>
                  {product.title}
                </Card.Title>
                <Card.Text style={{ color: '#495057', marginBottom: 'auto' }}>
                  <strong>Category:</strong> {product.category} <br />
                  <strong>Price:</strong> ₹{product.price.toLocaleString()}
                </Card.Text>
                <Button
                  variant="danger"
                  className="mt-3"
                  style={{ fontWeight: '500', borderRadius: '8px', transition: 'all 0.2s' }}
                  onMouseOver={(e) => { e.target.style.backgroundColor = '#c82333'; }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = '#dc3545'; }}
                  onClick={() => dispatch(deleteProduct(product._id, token))}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminProductsList;
