import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import Home from './pages/Home'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBooking from './pages/owner/ManageBooking'

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
         <Route path='/owner' element={<Layout/>}/>

         <Route path='/' element ={<Dashboard/>}/>
          <Route path='add-car' element ={<AddCar/>}/>
           <Route path='manage-cars' element ={<ManageCars/>}/>
            <Route path='manage-booking' element ={<ManageBooking/>}/>

     </Routes>
        
     {!isownerpath && <Footer/>}
    </>
  )
}

export default App