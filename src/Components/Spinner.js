import React from 'react'
import './comp.css'

const Spinner = ({spin}) => {

  return (
    <>
    {spin &&  <div className='spinner' ></div>}
    </>
    
  )
}

export default Spinner