import React, { useState, useEffect } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  //  Listen to window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine base bg & text classes
  const isHome = location.pathname === '/'
  const bgClass = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-black'
  const textClass = isHome && !scrolled
    ? 'text-white'
    : 'text-white'

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full flex items-center justify-between
        px-6 md:px-16 lg:px-24 xl:px-32 py-4 
        transition-all duration-300
        ${bgClass} ${textClass}
      `}
    >
      <Link to='/'>
        {/* <img src={assets.logo} alt='logo' className='h-8' /> */}
        <h1 className='h-8 text-2xl font-bold'>
          <span className="text-[#FFD700]">Kibur</span> Car Rental
        </h1>
      </Link>

      <nav
        className={`
          flex gap-6 sm:gap-8 items-center
          ${open ? 'block fixed inset-16 bg-black/90' : 'hidden sm:flex'}
        `}
      >
        {menuLinks.map((link, i) => (
          <Link key={i} to={link.path}>
            {link.name}
          </Link>
        ))}

        <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full'>
          <input
            type='text'
            placeholder='search products'
            className='bg-transparent outline-none placeholder-gray-400 py-1'
          />
          <img src={assets.search_icon} alt='search' />
        </div>

        <button onClick={() => navigate('/owner')} className='pt-2'>
          Dashboard
        </button>
        <button
          onClick={() => setShowLogin(true)}
          className='px-8 py-2 bg-[#FFD700] hover:bg-yellow-400 text-black rounded-lg'
        >
          Login
        </button>
      </nav>

      <button
        className='sm:hidden z-50'
        aria-label='menu'
        onClick={() => setOpen(o => !o)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt='menu' />
      </button>
    </header>
  )
}

export default Navbar
