import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../Components/AuthForm'
import { useUserDetails } from '../Hooks/useUserDetails'
import './page.css'

const Auth = () => {
    const {user} = useUserDetails()
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(user !== null) navigate('/dashboard')
    }, [])

  return (
    <div className='page'>
        <AuthForm />
    </div>
  )
}

export default Auth