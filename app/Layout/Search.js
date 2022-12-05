import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
const Search = () => {
  return (
    <div className='bg-gray-100 p-3 md:flex items-center gap-2  mx-4 hidden '>{/*inputfild*/} 
            <div className=' flex gap-2 justify-between items-center rounded-r-lg '>
              <select className='outline-none w-40 bg-transparent'>
                <option>all Cetagory</option>
                <option>all sanetiger</option>
                <option>all computer</option>
                <option>all vagetable</option>
                <option>all compuder</option>
                <option>all solersole</option>
                <option>all armsall</option>
                <option>all doctors</option>
                <option>all melamile</option>
              </select>
              <input type="text"  placeholder="i'm Search for..."
              className='bg-transparent outline-none px-2   border-l border-gray-400' />
                 <AiOutlineSearch/>
            </div>
       
       
       </div>
  )
}

export default Search