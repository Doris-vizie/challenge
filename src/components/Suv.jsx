// import React from 'react'
import suv from '../assets/images/icon-suvs.svg'

const Suv = () => {
  return (
    <div className="bg-cyan flex-col items-center px-10">
        <img className="py-5" src={suv} alt="" />
        <h1 className="">SUVS</h1>
        <p className="py-[25px] text-white"> Take an SUV for its spacious <br /> interior, power, and <br /> versatility.
         Perfect for your <br /> next family vacation and <br /> off-road adventures.</p>
         <button className='my-10 text-cyan rounded-[50px] hover:bg-cyan'>Learn more</button>
    </div>
  )
}

export default Suv