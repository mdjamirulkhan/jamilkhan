
import React from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import ProductTopSeverhelper from '../shared/ProductTopSeverhelper'
import { ProductTopSeverData } from '../../data/ProductTopSeverData'
import Link from 'next/link';
import LogIn from '../shared/LogIn'

const ProductTopSever = () => {
  return (
    <section>

      <div className="container">
        <div className='py-10'>
          <div className="flex flex-wrap justify-between items-center mb-6 md:text-xl text-xs" >
            <div className='flex flex-wrap justify-center items-center  px-3 gap-8'>
              <h3 className='md:text-3xl text-2xl text-title font-semibold   '>Top Saver Today</h3>
              <div className='flex flex-wrap md:mt-3 text-color   items-center '>
                <Link className='hover:text-primary transition-all flex flex-wrap gap-5 items-center text-sm' href="/cetagory" >All offers<AiOutlineRight size={20} /></Link>
              </div>

            </div>
            <div className='flex flex-wrap justify-between items-center gap-4'>
              <AiOutlineLeft
                className='bg-gray-100 text-gray-600 hover:text-primary transition-all '
                size={18} />  <AiOutlineRight
                className='bg-gray-100 text-gray-600 hover:text-primary transition-all'
                size={18} />
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <div className='py-8  gap-4 flex overflow-x-auto producthelper'>
              {ProductTopSeverData?.map((product, index) => (
                <ProductTopSeverhelper
                  key={index}
                  product={product}
                />

              ))}

            </div>
            {/* right percents  */}
            <div className='lg:w-[300px] md:w-full  m-auto rounded-t-md  border text-center '>
              
                  <LogIn/>

            </div>
          </div>
        </div>
      </div>




    </section>
  )
}

export default ProductTopSever