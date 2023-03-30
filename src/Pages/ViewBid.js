import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api_ } from '../Apis/api'
import Button1 from '../Components/Button1'
import Spinner from '../Components/Spinner'
import { useUserDetails } from '../Hooks/useUserDetails'
import useProducts from '../Store/useProducts'
import './page.css'

const ViewBid = () => {
    const bidInp = useRef(null)
    const { user } = useUserDetails()
    const goto = useNavigate()
    const {prod_id} = useParams()
    const { products, addProducts } = useProducts()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        if(products.length > 0){
            let prod = products.filter(p => p._id === prod_id)
            setProduct(prod[0])
        }else{
            addProducts()
        }
        return (()=>setProduct(null))
    }, [products])

    const placeBid = async() => {
        try {
            if(Number(bidInp.current.value) < Number(product.askingPrice)) throw new Error("internal")
            
            let request = {prodId: prod_id, phone: user.phone, amount: bidInp.current.value}
            await api_.post('/placebid', request)
            .then(res=>alert(res.data.message))
            .catch(({response})=>alert(response.data.message))
        } catch ({message}) {
            if(message === 'internal'){
                return alert("Bid amount has to be greater than asking price")
            } 
            goto('/auth')
        }
        
    }

    if(product === null) return <Spinner spin />
    return (
        <div className='page' id='view-bid-page'>
            <section> {/** images */}
                {product['images'].map((im, ind)=><div
                    key={ind}>
                    <img 
                        src={im}
                        alt='product'
                    />
                </div>)}
            </section>
            <section>
                <h1>{product.product}</h1>
                <span>{product.description}</span>
                <b><p>Asking Price: Ksh.{product.askingPrice.toLocaleString('en-US')}</p></b>
                <b><p>Current Bid: {
                    product.bids.at(-1).bidder !== '' ? 
                    Number(product.bids.at(-1).amount).toLocaleString('en-US') : 
                    "No bid yet"}</p></b>
                <span className='place-bid'>
                    <input ref={bidInp} placeholder='Amount to bid' />
                    <Button1 action={placeBid} load='load' txt='Place your bid' />
                </span>
            </section>
        </div>
    )
}

export default ViewBid