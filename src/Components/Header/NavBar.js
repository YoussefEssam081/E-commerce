import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApi } from '../../Store/Slices/Products_Slice'; // Adjust the import path

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.Products.products);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState("shop");

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Link to="/" > <img className='tryndaStore_logo' src='/Images/letter-o.png' alt=''/>  </Link> 
        <Link className='navbar-brand ' to="/">Obito Store</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link onClick={() => { setMenu("shop") }} className="nav-link " to="/">Shop
              {menu === "shop" ? <hr className='underline_Home' /> : <></>}
            </Link>
            {categories.map((category, index) => (
              <Link
                key={index}
                onClick={() => { setMenu(category) }}
                className="nav-link"
                to={`/${category}`}
              >
                {category}
                {menu === category ? <hr className='underline_Home' /> : <></>}
              </Link>
            ))}
            <Link onClick={() => { setMenu("product") }} className="nav-link" to="/product">Product
              {menu === "product" ? <hr className='underline_Home' /> : <></>}
            </Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/login"> <Button variant="outline-success">Login</Button>  </Link> 
          <Link to="/cart"> <img className='trolley_logo' src='/Images/trolley-cart.png ' alt=''/> </Link>
          <div className='nav_cart_count'>{cart.length}</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
