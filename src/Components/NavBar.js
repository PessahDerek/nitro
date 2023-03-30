import React from 'react'
import { useUserDetails } from '../Hooks/useUserDetails'
import NavBtn from './NavBtn'
import './comp.css'

const NavBar = () => {
    const {user} = useUserDetails()

    let btns = [
        {txt: "Home", path: "/"}, 
        {txt: user === null ? "Login/Signup" : "Dashboard", path: user === null ? "/auth" : "/dashboard"},
        {txt: ""}
    ]
  return (
    <nav className='navBar' style={style}>
        <h1>Marvel Auctions</h1>
        <div style={style.btns}>
            {btns.map(({txt, path}, i)=><NavBtn key={i} text={txt} path={path} />)}
        </div>
    </nav>
  )
}

const style = {
    width: "100%",
    height: "3rem",
    lineHeight: "3rem",
    top: '0',
    position: "sticky",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    zIndex: '5000',
    backgroundColor: "white",
    
    btns: {
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'space-around'
    }
}

export default NavBar