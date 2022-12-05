import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Popularatehelper = ({ image, title, bodyLink, percend }) => {
  return (
    <div className='p-3 '>
      <div className='lg:w-96 md:w-72 w-56'>
        <Image
          src={image}
          alt=''
          width={400}
          height={200}



        />

      </div >
      <div className='text-lg font-bold text-title'>
        <h3 className='text-color'>{title} </h3>

        <Link href='/'>
          {bodyLink} <br /> {percend}
        </Link>


      </div>


    </div>
  )
}

export default Popularatehelper