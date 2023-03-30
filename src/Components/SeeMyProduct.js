import React, { useEffect, useState } from 'react'
import { api_ } from '../Apis/api'
import { comma } from '../Utils/commarise'
import Button1 from './Button1'
import './comp.css'

const SeeMyProduct = ({product}) => {
    let {images, bids, askingPrice} = product
    const [spin, setSpin] = useState(false)

    const closeBid = async() => {
        setSpin(true)
        await api_.post('/closebid', {productId: product._id})
        .then(res=>{
            alert(res.data.message)
            setSpin(false)
        })
        .catch(({error, response})=>{
            try {
                alert(response.data.message)
            } catch (error) {
                alert(error.message)
            }
            setSpin(false)
        })
    }

  return (
    <div className='seeMyProduct'>
        <div className='imgs'>
            {images.map((im, indx)=><img key={indx} src={im} alt="prod" />)}
        </div>
        <em>Highest Bid: {bids.length < 1 ? "None yet" : bids[-1]}</em>
        <span>
            Asking Price: <b>Ksh.{comma(askingPrice)}</b>
        </span>
        <span>
            Bid Increment: <b>Ksh.{bids.length > 0 ? comma(bids[bids.length - 1].amount - askingPrice): 0}</b>
        </span>
        <Button1 spin={spin} action={closeBid} txt="Close Bid" load='load' />
    </div>
  )
}

export default SeeMyProduct