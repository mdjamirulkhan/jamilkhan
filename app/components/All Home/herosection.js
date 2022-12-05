    import {setBackgroundImage} from "../../utils/helpers"
   import HeroButton from "../../utils/HeroButton"


    const HomeSection = () => {
  
      console.log(HeroButton)
  return (
     <section className="py-11 " style={setBackgroundImage("/icon/homepage-new-slide-bg.jpg")} >
         <div className="container">
           <div className="  flex p-4 gap-5 flex-wrap">
            {/*left Banner */}
            <div className=" flex-1 p-3 md:w-2/3 rounded-2xl " style={setBackgroundImage('/icon/section-slider.jpg')}>
              <div className="px-10 flex flex-col justify-between h-full">
                <h1 className="md:text-4xl my-10   text-2xl text-title font-semibold px-3">Active Summer With <br /> Juice Milk 300ml</h1>
                  <p className="text-md text-color font-sans px-4 my-4" >New arrivals with nature fruite,juice <br /> milks,essential for summar </p>
                  <div>
                    <HeroButton 
                    name ="Shop Now"
                    />
                  </div>
              
              </div>

            </div>
            {/* right Bannerr */}
            <div className=" p-3 md:w-1/3 w-full rounded-lg" style={setBackgroundImage('/icon/section-slidertwo.jpg')}> 
            
            <div className="px-10 flex flex-col  justify-between h-full">
                <h1 className="md:text-4xl my-7   text-2xl text-black font-semibold px-3">20% SALE OFF</h1>
                  <p className="text-lg text-title  font-semibold  px-4 my-4" >Synthetic seeds <br /> Net 2.0 OZ </p>
                  <div>
                    <HeroButton 
                    name ="Shop Now"
                    />
                  </div>
              
              </div>
            
            
            
            
            
            
            
            
            
             </div>
            
           </div>
         </div>
     </section>
  )
}

export default HomeSection