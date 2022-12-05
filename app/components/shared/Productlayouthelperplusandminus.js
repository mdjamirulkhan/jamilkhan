import React from 'react'

const Productlayouthelperplusandminus = () => {
  return (
    <div className="border-t mb-5 ">
                    <h1 className="text-base text-title mb-6 mt-3">Quantity</h1>
                    <div className="flex gap-3">
                        <div className="border w-32 text-color flex flex-wrap justify-center gap-7 p-1 rounded-md text-2xl">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <div><button className="nextbtn"> Add to Card  </button></div>
                    </div>
                </div>
  )
}

export default Productlayouthelperplusandminus