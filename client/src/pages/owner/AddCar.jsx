import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {
        
  const currency = import.meta.env.VITE_CURRENCY
  const [image, setimages] = useState(null)
  const [car, setcar] = useState({
      brand: '',
      model:'',
      year: 0,
      priceperday: 0,
      category: '',
      transmission:'',
      fuel_type:'',
      seating_capacity:0,
      location:'',
      description : '',

  })
   const onsubmitHandeler = async ()=>{
    e.preventDefault()
   }
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Add New Car " subTitle="fill in details to list a new cacr for booking, including pricing, avilability, and car specification"/>

      <form action="" onSubmit={onsubmitHandeler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

         {/* car images */}
         <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image?URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer' />
            <input type="file" id="car-image" accept='image/*' hidden onChange={e=>setimages(e.target.files[0])} />
          </label>
          <p className='text-sm text-gray-500'>upload a picture of your car</p>
         </div>
           {/* car brand and model */}
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
             <div className='flex flex-col w-full'>
                 <label >Brand</label>
                 <input type="text"  placeholder='g.g. BMW, Mercedes, Audi...'  required className=' px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' 
                 value={car.brand} onChange={e => setcar({...car, brand: e.target.value})}/>
                  
             </div>
              <div className='flex flex-col w-full'>
                 <label >Model</label>
                 <input type="text"  placeholder='g.g. X5, e-class, M4 ...'  required className=' px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' 
                 value={car.model} onChange={e => setcar({...car, model: e.target.value})}/>
                  
             </div>
             
           </div>

           {/* car, year , price, category */}
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
               
                <div className='flex flex-col w-full'>
                 <label >Year</label>
                 <input type="number"  placeholder='g.g. 2025...'  required className=' px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' 
                 value={car.year} onChange={e => setcar({...car, year: e.target.value})}/>
                 </div>

                 <div className='flex flex-col w-full'>
                 <label >Daily Price({currency})</label>
                 <input type="number"  placeholder='g.g. 200 850 ...'  required className=' px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' 
                 value={car.priceperday} onChange={e => setcar({...car, priceperday: e.target.value})}/>
                 </div>

                 <div className='flex flex-col w-full'>
                 <label >Category</label>
                       <select  onChange={e=> setcar({...car, category: e.target.value})} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                        <option value="">select a category</option>
                        <option value="sedan">sedan</option>
                         <option value="SUV">SUV</option>
                          <option value="Van">Van</option>
                      </select>   
                 </div>

           </div>
              {/* car transmission, fuel type, seating capacity */}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                      <div className='flex flex-col w-full'>
                        <label >Transmission</label>
                       <select  onChange={e=> setcar({...car, transmission: e.target.value})} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                        <option value="">select a transmission</option>
                        <option value="Automatic">Automatic</option>
                         <option value="Manual">Manual</option>
                          <option value="semi-Automatic">semi-Automatic</option>
                      </select>   
                 </div>

                   <div className='flex flex-col w-full'>
                        <label >Fuel Type</label>
                       <select  onChange={e=> setcar({...car, fuel_type: e.target.value})} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                        <option value="">select a fuel_type</option>
                        <option value="Gas">Gas</option>
                         <option value="Diesel">Diesel</option>
                          <option value="Electric">Electric</option>
                          <option value="Hybrid">Hybrid</option>
                      </select>   
                 </div>

                  <div className='flex flex-col w-full'>
                 <label >Seating Capacity</label>
                 <input type="number"  placeholder='g.g. 4, 3...'  required className=' px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' 
                 value={car.seating_capacity} onChange={e => setcar({...car, seating_capacity: e.target.value})}/>
                 </div>
                 
              </div>
              {/* car location */}

              <div className='flex flex-col w-full'>
                        <label >Location </label>
                       <select  onChange={e=> setcar({...car, location: e.target.value})} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                        <option value="">select a Location</option>
                        <option value="New York">New York</option>
                         <option value="Los Angeles">Los Angeles</option>
                          <option value="Houston">Houston</option>
                          <option value="Chicago">Chicago</option>
                      </select> 

              </div>
              {/* car description */}

            <div className='flex flex-col w-full'>
                 <label >Description</label>
                 <textarea rows={5} placeholder='g.g. A luxurious SUV with ...'  required className=' px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' 
                 value={car.description} onChange={e => setcar({...car, description: e.target.value})}> </textarea>
                 </div>
            
          <button className=' flex items-center gap-2 px-4 py-2.5 mt-4 bg-[#FFD700] text-black rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt=""  />
            List Your Car
          </button>
      </form>
    </div>
  )
}

export default AddCar
