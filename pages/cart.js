import React from 'react'
import Cardhelperbreadcrumbs from '../app/components/shared/Cardhelperbreadcrumbs'
import { MdVerified } from 'react-icons/md';
function Cart() {
  return (
    <div>
      <Cardhelperbreadcrumbs />
      <div className="container">
        <div className='px-4'>
          <div className='my-20 text-center'>
            <h1 className='text-5xl font-semibold text-title'>Cart</h1>
          </div>
          <div className='bg-[#3D9CD2] rounded-sm px-5 '>
            <p className='flex gap-2 items-center py-4 text-base text-white  '> <MdVerified />  Your Card is currently empty.</p>
          </div>
          <div className=' hover:shadow hover:cursor-pointer hover:shadow-slate-300 bg-[#f5f5f5] w-fit px-4 py-2  mt-6 border border-gray-200 '>
            <p className='text-title font-semibold '>Return to shop</p>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Cart