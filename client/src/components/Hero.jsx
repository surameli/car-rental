import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const [PickupLocation, setPickupLocation] = useState('')
  const navigat = useNavigate()

  return (
    <div className="relative h-screen w-full text-center text-white">
      {/* Background Image */}
      <div className="absolute h-screen inset-0 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat z-0"></div>

      {/* Optional: dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      {/* <div className="relative z-10 flex flex-col  h-full gap-14 px-4"> */}
        {/* <h1 className="text-4xl md:text-5xl font-semibold">Luxury Cars on Rent</h1> */}

        {/* <form
          className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-4xl bg-white text-black shadow-[0px_8px_20px_rgba(0,0,0,0.1)] gap-4"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 w-full">
            <div className="flex flex-col items-start gap-2">
              <select
                required
                value={PickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="">Pickup Location</option>
                {cityList.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <p className="px-1 text-sm text-gray-500">
                {PickupLocation ? PickupLocation : 'Please select Location'}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="pickup-date">Pickup Date</label>
              <input
                type="date"
                id="pickup-date"
                min={new Date().toISOString().split('T')[0]}
                className="text-sm text-gray-700 px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="return-date">Return Date</label>
              <input
                type="date"
                id="return-date"
                className="text-sm text-gray-700 px-3 py-2 border rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#FFD700] hover:bg-yellow-400 text-black rounded-full transition-all"
          >
            <img src={assets.search_icon} alt="search" className="w-5 h-5" />
            Search
          </button>
        </form> */}



        {/* <div className="">
        <h1 className="text-4xl md:text-5xl font-semibold ">Luxury Cars on Rent</h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200">
          Discover top-tier luxury car rentals for every occasion. Whether it's for business,
          a getaway, or a celebration, choose from our wide range of premium vehicles.
        </p>
      </div> */}

        {/* <img src={assets.car_image5} alt="car" className="max-h-72 object-contain" /> */}


        <div className="relative z-10 flex items-center justify-start h-full px-16 md:px-20">
        <div className="max-w-4xl text-left space-y-6 space-x-10">
          <h1 className="text-5xl md:text-5xl font-bold">Luxury Cars on Rent</h1>
          <p className="text-2xl md:text-2xl w-full text-gray-200">
            Choose from a wide range of premium and luxury cars for rent at the best rates. Enjoy a seamless experience and unmatched comfort during your journey.
          </p>
           <button onClick={()=>{
        navigat('/cars'); scrollTo(0,0)
                       }}
          className="mt-4 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-full font-medium transition-all">
            Explore Cars
          </button>
        </div>
      </div>
   //  </div>



   
  )
}

export default Hero
