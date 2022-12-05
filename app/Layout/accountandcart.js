import React from 'react'
import { AiOutlineUserAdd,AiOutlineShoppingCart } from 'react-icons/ai';

const Allicons = () => {
  return (
    <div>{/*icon*/} 
        <div className='flex items-center '>
          
          
          <a href="myaccount" className='gap-3 text-3xl'>
          <AiOutlineUserAdd/>
            
        </a>
        
         <div className=' flex items-center gap-3'>
         <div className='relative'>
         <a href="cart" className='gap-3 text-3xl'>
          <AiOutlineShoppingCart/>
          <span className='absolute rounded text-xs bg-primary px-1 -top-0 -right-0'>0</span>
        </a>
        </div>
            <div className='text-sm text-color'>
              <span>Your Cart</span>
              <p>$0.00</p>
            </div>
         </div>
        </div>
       
       
       </div>
  )
}

export default Allicons