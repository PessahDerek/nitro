import React from 'react'
import { useNavigate } from 'react-router-dom'
import './comp.css'

const LinkBtn2 = ({txt, subPath}) => {
    const navigate = useNavigate();
    const navTo = () => navigate(subPath)

    
  return (
    <button className='linkBtn2' style={{...style}} onClick={navTo}>
        {txt}
    </button>
  )
}

const style = {
    width: "9rem",
    margin: '0.2rem',
    height: "5rem",
    fontSize: '1.2rem',
    backgroundColor: "black",
    color: 'white',
}

export default LinkBtn2