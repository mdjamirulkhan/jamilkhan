import React from 'react'
import Image from 'next/image'
const ProductTopSeverhelper = ({product}) => {
    const {image,description,weight,oldPrice,price,name} =product
  return (
    <div> 

        
        {/* product list */}
        <div className='productborder'>
            {oldPrice &&(
                <div className='absolute top-2 left-2 '>
                <h1 className="bg-orange px-2 py-1 text-xs  rounded-sm text-white font-bold lowercase  ">14% OFF</h1>
            </div>
            )}

    <div className='mt-7'>
    <Image src={image}
        alt=""
        width={250}
        height={200}
        
        >
    </Image>
    </div>
    <div className='p-2'>
        <h3 className='text-black font-semibold '>{name}</h3>
        <p className='truncate text-cyan-500 font-serif'>{description} </p>
        {/* kg */}
        <span className='text-color '>{weight}</span>
        <h4 className='text-red-500 font-bold ' >${price} 
        {oldPrice &&(
            <span className='text-color line-through ml-2'>${oldPrice}</span>
        )}
        
        </h4>
    </div>
</div>


</div>
  )
}

export default ProductTopSeverhelper