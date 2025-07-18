import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import Home from './pages/Home'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'

const App = () => {
  const [showLogin , setShowLogin] = useState(false)
  const isownerpath = useLocation().pathname.startsWith('/owner')
    return (
    <>
     {!isownerpath && <Navbar setShowLogin={setShowLogin}/>}

     <Routes>
      <Route path='/' element ={<Home/>}/>
       <Route path='/car-details/:id' element ={<CarDetails/>}/>
        <Route path='/cars' element ={<Cars/>}/>
         <Route path='/my-bookings' element ={<MyBookings/>}/>
     </Routes>
        
     {!isownerpath && <Footer/>}
    </>
  )
}

export default App