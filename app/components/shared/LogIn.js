import NextButton from "../../utils/NextButton"
import { setBackgroundImage } from "../../utils/helpers"
const LogIn = () => {
  return (
    <div className=' ' style={setBackgroundImage('/icon/producttopsaver.png')}>
                <div>
                  <h1 className='text-red-500 font-bold text-5xl mb-8 pt-5'>15% OFF</h1>
                  <p className='text-xl font-sans mb-8 text-title'>For new member sign up <br /> at <br /> the first time</p>
                  {/* login slider input */}
                  <div className="">
                    <input className='lg:w-56 md:block md:m-auto   md:py-3  md:mb-6 w-80  mb-6 py-2 pl-3 rounded-3xl outline-none' type="text" placeholder='UserName' name="" id="" />

                    <input
                      className='lg:w-56 w-80 md:block md:py-4   md:m-auto md:mb-6 mb-6  py-2 pl-3 rounded-3xl outline-none' type="email" placeholder='Enter Email' name="" id="" /> 
                    <input
                      className='lg:w-56 w-80 mb-6 md:py-4 py-2 pl-3 rounded-3xl outline-none' type="Password" placeholder='Type Password' name="" id="" />


                  </div>
                  <div>
                    <NextButton
                      text="Register Now"
                    />
                  </div>
                </div>
              </div>
  )
}

export default LogIn