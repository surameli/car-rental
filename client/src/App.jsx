import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

const App = () => {
  const [showLogin , setShowLogin] = useState(false)
  const isownerpath = useLocation().pathname.startsWith('/owner')
    return (
    <div>
     {!isownerpath && <Navbar setShowLogin={setShowLogin}/>}
    </div>
  )
}

export default App