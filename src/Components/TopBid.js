import React from 'react'
import Button1 from './Button1'
import './comp.css'

const TopBid = ({highest, expensive}) => {
  return (
    <div className='top-div'>
        {(expensive !== null) && 
        <div className='top-bid-nav'>
            <h2>Most Expensive Bid</h2>
            <img src={highest.images[0]} />
            <Button1 load='normal' txt="View" />
        </div>}
        {(highest !== null) && 
        <div className='top-bid-nav'>
            <h2>Most Popular</h2>
            <img src={highest.images[0]} />
            <Button1 load='normal' txt="View" />
        </div>}
    </div>
  )
}

export default TopBid