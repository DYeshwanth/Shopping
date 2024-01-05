import React from 'react'
import './Card.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = ({offerPrice,image,name,rating,actualPrice}) => {
  return (
    <div className='card'>
      <div className='card-fav'>
        <i class="bi bi-heart"></i>
      </div>
      <div className='card-img'>
        <img src={image} alt='images' />
      </div>
      <div className='content-details'>
        <div className='card-details'>
            <p className='title'>Adidas</p>
            <p>Running shoes</p>
            <span className='span1'>₹{offerPrice}</span>
            <span className='span2'>₹{actualPrice}</span>
            <span className='span3'>56%</span>
        </div>
        <div className='card-size'>
            <p>size<span>5,6,7,8</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default Card
