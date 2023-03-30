import React from 'react'
import MyProducts from '../Components/MyProducts'
import SellForm from '../Components/SellForm'

const Sell = () => {
  return (
    <div style={style} className='sub' id='sellPage'>
        <SellForm />
        <MyProducts />
    </div>
  )
}
const style = {
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
}
export default Sell