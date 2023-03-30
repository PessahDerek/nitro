import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DashLeftSection from '../Components/DashLeftSection'
import Logout from '../Hooks/UseLogout'
import { useUserDetails } from '../Hooks/useUserDetails'
import MyWonBids from '../SubPage/MyWonBids'
import Sell from '../SubPage/Sell'
import Settings from '../SubPage/Settings'
import './page.css'

const Dashboard = () => {
    const navigate = useNavigate()
    let {user} = useUserDetails()

    useEffect(()=>{
        if(user === null) return navigate('/auth')
    }, [])
  return (
    <div className='page' id='dashboard'>
        <DashLeftSection />
        <Routes>
            <Route exact path='/' element={<Sell />} />
            <Route exact path='/settings' element={<Settings />} />
            <Route exact path='/mywonbids' element={<MyWonBids />} />
            <Route exact path='/logout' element={<Logout />} />
        </Routes>
    </div>
  )
}

export default Dashboard