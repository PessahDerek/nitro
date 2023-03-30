import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBtn = ({text, path}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    let colored = "2px solid black", notCol = "2px solid transparent"

    const getBorder = () => pathname.length > 1 ? 
        pathname === path ? colored : notCol : 
        pathname.includes(path) ? colored : notCol
    
    const naVigate = () => navigate(path)

  return (
    <button style={{...style, borderBottom: getBorder()}} onClick={naVigate}>
        {text}
    </button>
  )
  
}
const style = {
    height: "2rem",
    minWidth: "5rem",
    margin: 'auto',
    transition: "all 0.2s linear",
    backgroundColor: "transparent",
    textAlign: "left",
    padding: '0'
}

export default NavBtn

