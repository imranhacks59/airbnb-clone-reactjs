import React from 'react'
import './cards.css';
import hotel from '../../assets/hotels/hotel-1.jpeg'
const Card = ({card}) => {
  return (
    <div className='card-div'>
        <img src={hotel} alt='' className='card-hotel-img' />
        <div className='place-header'>
          <p>plcae</p>
          <p>Rating</p>
        </div>
        <div className='card-footer'>
          <p style={{margin:0}}>stay with glown</p>
          <p>price 2345</p>
        </div>
    </div>
  )
}

export default Card