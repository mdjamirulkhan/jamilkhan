 import Link from 'next/link';
export const HeroButton = ({name}) => {
  return (
    <Link href='/about'>
            <button className='bg-white p-3 px-4 font-semibold text-md ml-4 my-6 w-fit hover:shadow-md transition-shadow rounded-md '> {name}</button>
        
        </Link>
  )
}

export default HeroButton