import React from 'react'
import './comp.css'

const MyWonBidBanner = ({product}) => {
  return (
    // shares some styling with ActiveBids.js
    <div className='activeBids'> 
        <div>
            <img src={product.images[0]} />
        </div>
        <h3>{product.product}</h3>
        <p>Asking Price: {product.askingPrice}</p>
        <p>Bid Closed at: {product.closingPrice}</p>
    </div>
  )
}

export default MyWonBidBanner