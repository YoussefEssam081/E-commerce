import React from 'react'
import './Offer.css'
import'../../App.css'
export const Offer = () => {
  return (
    <div className='offers'>
        <div className='offer_left'>
        <img className='offer_img' src='./Images/8543464.jpg'/>
        </div>
        <div className='offer_right'>
        <h1> Exclusive</h1>
             <h1>Offers For You</h1>
             <p>ONLY ON BEST SELLERS PRODUCTS</p>
             < button className=" custom-btn btn-3 mb-4"><span>Check Now </span></button>
         
        </div>
        

    </div>
  )
}
