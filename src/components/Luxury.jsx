import luxury from '../assets/images/icon-luxury.svg'
const Luxury = () => {
  return (
    <div className="bg-dark flex-col items-center px-10 rounded-r-md">
        <img className="py-5" src={luxury} alt="" />
        <h1 className="">LUXURY</h1>
        <p className="py-[25px] text-white"> Cruise in the best car brands <br /> without the bloated prices. <br />
         Enjoy the enhanced comfort <br /> of a luxury rental and arrive <br /> in style.</p>
         <button className='my-10 text-dark rounded-[50px] hover:bg-dark'>Learn more</button>
    </div>
  )
}

export default Luxury