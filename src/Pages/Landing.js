import React, { useEffect, useState } from 'react'
import LandingDisplay from '../Components/LandingDisplay'
import LeftSitePanel from '../Components/LeftSitePanel'
import useIsPc from '../Hooks/useIsPc'
import useProducts from '../Store/useProducts'
import './page.css'

const Landing = () => {
    const [ searched, setSearched ] = useState(false)
    const { products, addProducts } = useProducts()
    const isPc = useIsPc()

    useEffect(()=>{
        addProducts()
    }, [])

  return (
    <div className='page' id='landing'>
        {isPc &&
        <section className='leftPanel'>
            <LeftSitePanel setSearched={setSearched} />
        </section>}
        <section>
            <LandingDisplay searched={searched} products={products} />
        </section>
    </div>
  )
}

export default Landing