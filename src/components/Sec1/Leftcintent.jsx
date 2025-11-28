import React from 'react' 
import Lefttcard from './Lefttcard'
const Leftcintent = ({user,index}) => {
  return (
    
    <div> 

      {/* text goes ABOVE overlay using z-10 */}
      <div className='absolute bottom-0 left-0  p-10  text-black'>
        <h2 className="text-black text-2xl font-bold rounded-full h-10 w-10 flex justify-center   bg-blue-950 items-center mb-49">{index}</h2>
       {/* Intro text */}
        <p className="leading-normal text-white mb-6">
          
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="flex items-center gap-3 mt-3">
  <button className="bg-blue-950 text-white font-semibold px-3 py-1 rounded-full">
    {user.tag}
  </button>

  <button className="bg-blue-950 text-white font-semibold px-2 py-1 rounded-full">
    <i className="ri-arrow-right-line"></i>
  </button>
</div>

      </div>

    </div>
  )
}

export default Leftcintent