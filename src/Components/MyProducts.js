import React, { useEffect, useState } from 'react'
import { api_ } from '../Apis/api'
import SeeMyProduct from './SeeMyProduct'
import './comp.css'

const MyProducts = () => {
    const [myProducts, setMyProd] = useState([])

    const getMyProducts = async() => {
        await api_.get('/myproducts')
        .then(res => setMyProd(res.data.filter(p => p.open)))
        .catch(({message, response:{data}})=>{
            try {
                alert(data.message)
            } catch (error) {
                alert(message)
            }
        })
    }
    useEffect(()=>{
        getMyProducts()
    }, [myProducts])

  return (
    <div className='myProducts' style={style}>
        {myProducts.map(p=><SeeMyProduct key={p._id} product={p} />)}
    </div>
  )
}

const style = {
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
}

export default MyProducts