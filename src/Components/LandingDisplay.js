import React, { useEffect } from 'react'
import ListBids from './ListBids'
import TopBid from './TopBid'
import './comp.css'
import useProducts from '../Store/useProducts'

const LandingDisplay = ({searched }) => {
    const { products } = useProducts()

    const highest = () => {
        if(products.length < 1) return null
        let all = products.map(p => p.bids.filter(x => x.bidder !== ''))
        let toplength = all[0].length, index = 0;
        for(let arr of all){
            if(arr.length > toplength){
                toplength = arr.length;
                index = all.indexOf(arr)
            }
        }
        return products[index]
    }
    const expensive = () => {
        if(products.length < 1) return null
        let all = products.map(p => p.bids.filter(x => x.bidder !== ''))
        let top = all[0], index = 0;
        for(let x of all){
            if(x.amount > top.amount){
                top = x
                index = all.indexOf(x)
            } 
        }
        return products[index]
    }

    if(searched.length > 0)return (
        <div className='landingDisplay'>
            {searched.map(search=><ListBids key={search._id} bid={search} />)}
        </div>
    )
    return (
        <div className='landingDisplay'>
            <TopBid highest={highest()} expensive={expensive()} />
            <div className='all'>
                {products.map(prod => <ListBids key={prod._id} bid={prod} />)}
            </div>
        </div>
  )
}

export default LandingDisplay