import React from 'react';
import './MainUi.css';
import '../../App.css';
import { TopSelling } from './TopSelling';
import { Offer } from './Offer';
import { Newsletter } from './NewsLetter';
import { Footer } from '../Footer/Footer';

export default function MainUi() {
  return (
    <>
      <div className='mainview'
        style={{
          backgroundImage: "url('/images/bastian-riccardi-BQ9usyzHx_w-unsplash.jpg')"
        }}
      >

        <div className='mainview_right'>

          <h2 className='mainview_right_lets main_quote'>LET'S </h2>
          <p className='nav-link'>EXPLORE</p>
          <h2 className='mainview_right_unique main_quote'>UNIQUE</h2>
          <p className='nav-link'>PRODUCTS. </p>
          
         
          <button class="custom-btn btn-12"><span>Click!</span><span>SHOP NOW</span></button>
        </div>
        
         
        <img className='mainview_Hello_icon' src='/Images/wave.png' alt='' />


      </div>

      <TopSelling />
      <Offer/>
      <Newsletter />
      <Footer/>
    </>
  );
}
