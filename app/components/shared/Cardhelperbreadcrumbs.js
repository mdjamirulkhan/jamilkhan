import React from 'react'
import Link from 'next/link'
const Cardhelperbreadcrumbs = () => {
  return (
   <div className='bg-[#f5f5f5]'>
     <div className=' capitalize max-w-5xl mx-auto p-4 mt-2 text-sm font-semibold text-color'>
        <Link href='/' className='mr-1'>
           home <span>/</span>
        </Link>
        
        <Link href='/shop'>
           Shop <span>/</span>
        </Link>
        
        <Link href='/cart'>
           Card 
        </Link>
        
    </div>
   </div>
  )
}

export default Cardhelperbreadcrumbs