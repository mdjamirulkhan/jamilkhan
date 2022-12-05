import React from 'react'
import { setBackgroundImage } from '../../utils/helpers'
import Link from 'next/link'
const ProductSymple = () => {
  return (

    <section>
      <div className="container">
        <div className='flex gap-6  ml-4 py-8 flex-wrap'>
          <div className='lg:w-[378px] cursor-pointer md:w-72   w-full' style={setBackgroundImage('/icon/action.png')}>
            <Link href='/home'>
              <div className=''  >
                <h1 className='text-3xl text-gray-900 font-bold p-5 mb-6'>Mango Juice <br />Bottle</h1>
                <p className='p-5 mb-4 text-gray-800 font-semibold'>Lorem ipsum dolor <br /> sit amet. </p>

              </div>

            </Link>
          </div>







          <div className="lg:w-[378px] cursor-pointer w-full md:w-72 rounded-lg" style={setBackgroundImage("/icon/action2.png")}>

            <div className='p-6 '>
              <h1 className='font-bold text-4xl pb-6 text-red-500'>$9.9
                <span className='line-through text-base text-center ml-2'>$15.5</span>
              </h1>
              <h5 className='text-xl font-semibold mb-6'>MEAT POAK <br /> CONNED</h5>
              <p>250 kg</p>
            </div>



          </div>


          <div className="w-full cursor-pointer lg:w-[378px] md:w-72" style={setBackgroundImage("/icon/action3.png")}>

            <div className='p-6 '>
              <h1 className='font-semibold text-3xl pb-6  text-white'>
                OLive Oil
              </h1>
              <p className='text-white font-semibold'>Best Product Make <br /> Your Faver</p>
              <p className='text-white font-semibold text-lg mt-7'>ONLY</p>
              <h2 className='text-3xl font-semibold text-white'>$12.2</h2>
            </div>



          </div>


        </div>
      </div>
    </section>
  )
}

export default ProductSymple