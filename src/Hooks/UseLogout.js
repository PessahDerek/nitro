import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Logout = () => {
    const goto = useNavigate()
    useEffect(()=>{
        localStorage.removeItem("aucUser")
        goto('/')
    })

    return <></>
}

export default Logout