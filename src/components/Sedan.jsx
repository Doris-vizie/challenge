// import React from 'react'
import sedan from '../assets/images/icon-sedans.svg'
const Sedan = () => {
  return (
    <div className="bg-orange flex-col items-center px-10 rounded-l-md">
        <img className="py-5" src={sedan} alt="" />
        <h1 className="">SEDANS</h1>
        <p className="py-[25px] text-white"> Choose a sedan for its <br/> affordability and excellent <br /> fuel economy.
         Ideal for <br /> cruising in the city or on <br /> your next road trip.</p>
         <button className='my-10 text-orange rounded-[50px] hover:bg-orange'>Learn more</button>
    </div>
  )
}

export default Sedan
