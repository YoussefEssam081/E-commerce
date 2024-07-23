import React from 'react';
import { Button, Container, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteFromCart } from '../Store/Slices/Cart_Slice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; // Import SweetAlert styles
import '../App.css';
import './Cart.css';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const handleDelete = (product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove ${product.title} from your cart?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFromCart(product));  
        Swal.fire('Deleted!', `${product.title} has been removed from your cart.`, 'success');
      }
    });
  };

  return (
    <Container>
      <Button className='mb-3 mt-3 clear-cart-btn' variant='danger' onClick={() => dispatch(clearCart())}> Clear Cart </Button>
      <h5 className='total-price'>Total Price: {totalPrice.toFixed(2)}$</h5>
      <Table striped bordered hover size="sm" className='cart-table'>
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={product.id} className='text-center'>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td><Image src={product.images} className='product-image' /></td>
              <td>{product.price}$</td>
              <td>{product.quantity}</td>
              <td>
                <Image className='product-trash-icon' onClick={() => handleDelete(product)} src='../Images/bin.png' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};




  /* 
  
  import React from 'react';
import { Button, Container, Card, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteFromCart } from '../Store/Slices/Cart_Slice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; // Import SweetAlert styles
import '../App.css';
import './Cart.css';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const handleDelete = (product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove ${product.title} from your cart?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFromCart(product));
        Swal.fire('Deleted!', `${product.title} has been removed from your cart.`, 'success');
      }
    });
  };

  return (
    <Container className="cart-container">
      <Button className='mb-3 mt-3 clear-cart-btn' variant='danger' onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <h5 className='total-price'>Total Price: {totalPrice.toFixed(2)}$</h5>
      <Row>
        {cart.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className='mb-4'>
            <Card className='cart-card'>
              <Card.Img variant="top" src={product.images} className='cart-card-image' />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {product.price}$<br />
                  <strong>Quantity:</strong> {product.quantity}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDelete(product)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

  
  */