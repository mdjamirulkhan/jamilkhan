import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from "./Search"
import Allicons from "./accountandcart"

const Header = () => {
  return (
    <header className='border-b border-slate-200 px-3'>
      <div className='container'>
        <div className=' flex justify-between items-center py-4'>
          <div >
            <Link href="/">
              <Image
                src="/logo.svg"
                width="190"
                height="25"
                objectFit='contain'

                alt='hello'
              />
            </Link>
          </div>
          <Search />


          <div className=''>{/*contact*/}
            <div className=' md:block hidden'>
              <span className='font-semibold  md:text-base text-primary lg:text-xl ' >8 800 332 65-66</span>
              <p className='text-right  text-gray-400'>Support 24/7</p>
            </div>

          </div>
          <Allicons />
        </div>
      </div>
    </header>
  )
}

export default Header