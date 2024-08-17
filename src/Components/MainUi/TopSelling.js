import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { TopSellingData } from './TopSellingData';
import './TopSelling.css';
import { Link } from 'react-router-dom';
import '../../App.css';

export const TopSelling = () => {
  const topSellingProducts = TopSellingData();

  return (
    <Container>
      <div className="custom-container text-center mb-4 mt-5">
        <h3 className='custom-heading'>Top Selling Products for You</h3>
        <h1 className='custom-title'>Top Selling Products</h1>
        <p className='custom-paragraph mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt.</p>
      </div>
      <Row  >
        {topSellingProducts.map((product, index) => (
          <Col key={index} md={3} className="mb-4">
            <div className="image-container ">
              <Link to="/product"><Image src={product.image} className=" custom-image" /></Link>
            </div>
            <h2 className="custom-product-title">{product.title}</h2>
            <Image className='productS_star_icon' src="../Images/star.png"/>
            <span className="custom-product-span">{product.rating}</span>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mb-5">
        <Link to="/product">
          <button className="custom-btn btn-6"><span>View All Products</span></button>
        </Link>
      </div>
    </Container>
  );
};
