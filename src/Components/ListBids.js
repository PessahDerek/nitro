import React from 'react'
import { useNavigate } from 'react-router-dom'
import './comp.css'

const ListBids = ({bid}) => {
    const goto = useNavigate()

  return (
    <div className='list-bids' style={style} onClick={()=>goto(`/overview/${bid._id}`)}>
        <img src={bid.images[0]} alt='product' style={imgStyle} />
        <span>
            <h3>Ksh.{bid.askingPrice}</h3>
            <p>{bid.product}</p>
        </span>
    </div>
  )
}

const style = {
    width: '90%',
    margin: 'auto',
    overFlow: 'hidden'
}
const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "all 0.2s linear"
}

export default ListBids