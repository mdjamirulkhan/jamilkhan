import React from 'react'

const NextButton = ({ text }) => {
    return (
        <div>
            <button className='bg-primary p-3 px-4 font-semibold text-md ml-4 my-6 w-fit hover:shadow-md transition-shadow rounded-md '> {text}</button>



        </div>
    )
}

export default NextButton