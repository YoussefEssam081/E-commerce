
import './App.css';
import NavBar from './Components/Header/NavBar';
import {  Routes , Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import RegistrationForm from './Pages/RegistrationForm';
import Category from './Components/Categoryies/Category';
import ProductDetail from './Pages/ProductDetail ';

function App() {


  return (
    <div  >

<NavBar />

<Routes>
  <Route  path='/' element={<Shop/>} />
  <Route path="/:categoryName" element={<Category />} />
  <Route path="/productDetail/:id" element={<ProductDetail />} />
  <Route  path='product' element={<Product/>} >  
      <Route path=':productId' element={<Product/>} />
  </Route>
  <Route  path='/cart' element={<Cart/>} />
  <Route  path='/login' element={<RegistrationForm/>} />
  
</Routes>

  
    </div>
  );
}

export default App;
