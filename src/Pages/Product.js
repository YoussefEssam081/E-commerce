import React, { useEffect } from 'react';
import { Container, Row, Col , Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchApi } from '../Store/Slices/Products_Slice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/Slices/Cart_Slice';
import '../App.css'; // Example of correct import statement

export const Product = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.Products.products); 
  const status = useSelector((state) => state.Products.status);
  const error = useSelector((state) => state.Products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchApi());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = products.map((prods) => (
      <Col key={prods.id}>
        <Card>
          <Card.Img variant="top" style={{ width: '250px', maxHeight: '300px' }} src={prods.thumbnail} />
          <Card.Body>
            <Image className='productS_star_icon' src="../Images/star.png"/>
          <span>{prods.rating} </span>
            <Card.Title>{prods.title}</Card.Title>
            <Card.Text>
              {prods.category}
            </Card.Text>
            <Button variant="primary" onClick={() => dispatch(addToCart(prods))}>Add to cart</Button>
           
          </Card.Body>
        </Card>
      </Col>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <Container>
      <Row>
        {content}
      </Row>
    </Container>
  );
};
