import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../Redux/AdminActions/AdminActions';

const AddProduct = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.jwtToken);

  const [form, setForm] = useState({ title: '', category: '', price: '', rating: '' });
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(form, image, token));
    setForm({ title: '', category: '', price: '', rating: '' });
    setImage(null);
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '12px' }}>
        <h3 className="mb-4 text-center" style={{ color: '#0d6efd' }}>Add New Product</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              style={{ borderRadius: '8px', padding: '10px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              style={{ borderRadius: '8px', padding: '10px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              style={{ borderRadius: '8px', padding: '10px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Rating"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
              style={{ borderRadius: '8px', padding: '10px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              style={{ borderRadius: '8px', padding: '6px' }}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100"
            style={{
              backgroundColor: '#0d6efd',
              border: 'none',
              padding: '10px',
              fontWeight: '500',
              borderRadius: '8px',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0b5ed7')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#0d6efd')}
          >
            Add Product
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddProduct;
