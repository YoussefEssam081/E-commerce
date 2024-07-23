import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../../Store/Slices/Products_Slice';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { addToCart } from '../../Store/Slices/Cart_Slice';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';

const Category = () => {
  const { categoryName } = useParams();  // extracts the categoryName from the URL /that returns an object of key-value pairs of the dynamic params from the current URL.
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.products);
  const status = useSelector((state) => state.Products.status);
  const error = useSelector((state) => state.Products.error);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchApi());
    }
  }, [status, dispatch]);

  const filteredProducts = products.filter(product => product.category === categoryName);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <h1 className="text-center my-4">{categoryName}</h1>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Image src={product.images} alt={product.title} fluid />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link to={`/productDetail/${product.id}`}>
                  <Button variant="primary">Show More</Button>
                </Link>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
//<Button variant="primary" onClick={() => handleAddToCart(product)}>Add to cart</Button>