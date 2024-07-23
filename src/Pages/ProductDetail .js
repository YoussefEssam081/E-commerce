import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Store/Slices/Products_Slice';
import './ProductDetail.css';
import '../App.css';
import { addToCart } from '../Store/Slices/Cart_Slice';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ProductDetail = () => {

    const { id } = useParams(); // Extracts the product ID from the URL
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Products.products);
    const status = useSelector((state) => state.Products.status);
    const error = useSelector((state) => state.Products.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchApi());
        }
    }, [status, dispatch]);

    const product = products.find(product => product.id === parseInt(id)); // Find the product by ID

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };

      
  
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
      }


   return (
    <div className="product-detail">
      <div className="product-photo">
        <img src={product.images} alt="Product" />
      </div>
      <div className="product-info">
        <p className="description">{product.description}</p>
        <div className="rating">
          {/* Replace with actual star icons or images */}
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} >★</span>
          ))}
        </div>
        <div className="price-info">
          <span className="old-price">120$</span>
          <span className="new-price">80$</span>
        </div>
        <h6>Select Size:</h6>
        <div className="size-options">
          <span className="size-button">S</span>
          <span className="size-button">M</span>
          <span className="size-button">L</span>
          <span className="size-button">XL</span>
          <span className="size-button">XXL</span>
        </div>
        <Link><Button variant="primary" onClick={() => handleAddToCart(product)}>Add to cart</Button> </Link>
        <p className="category">{product.category}</p>
      </div>
    </div>
  );
};


export default ProductDetail;
