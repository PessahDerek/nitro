import React, { useEffect } from 'react'
import ActiveBids from '../Components/ActiveBids'
import useWonBids from '../Hooks/useWonBids'
import useProducts from '../Store/useProducts'
import './sub.css'

const MyWonBids = () => {
    const { wonBids, activeBids, getWonBids, getActiveBids} = useProducts()

    useEffect(()=>{
        getWonBids()
        getActiveBids()
    }, [])



    return (
    <div className='sub' id='my-won-bids'>
        <h1>Bids You have placed</h1>
        <div className='section' >
            {activeBids.length < 1 ? <h1>No active bids</h1> :
            activeBids.map(bid => <ActiveBids key={bid._id} product={bid} />)}
        </div>
        <h1>Bids you have won</h1>
        <div className='section' >
            {wonBids.length < 1 ? <h1>You haven't won any bids yet</h1> : 
            <></>}
        </div>
    </div>
  )
}

export default MyWonBids