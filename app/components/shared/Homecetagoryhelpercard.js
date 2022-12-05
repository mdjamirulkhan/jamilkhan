import Image from 'next/image'
import React from 'react'

const Homecetagoryhelpercard = ({image,text}) => {
  return (
    <div>
        <div className="flex p-4">
              <div className='bg-gray-100 w-56 p-10 rounded-md hover:bg-white hover:duration-700 hover:shadow-md transition-all'>
                <div className=" text-center ">
                <Image
                    src={image}
                    alt='jamil'
                    width={100}
                    height={200} 
                    
                 />
                </div>
                 <div className='text-center mt-3 font-bold text-lg text-gray-900'>
                    <h5>{text} </h5>
                 </div>
              </div>
        </div>
    

        
    </div>
  )
}

export default Homecetagoryhelpercard