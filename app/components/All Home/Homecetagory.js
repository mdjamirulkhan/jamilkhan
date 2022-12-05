import { AiOutlineRight,AiOutlineLeft } from 'react-icons/ai';
import  Homecetagoryhelpercard from "../shared/Homecetagoryhelpercard"
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Link from 'next/link';
const Homecetagory = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 2500 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 924 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 364 },
          items:3
        },
        mobile: {
          breakpoint: { max: 464, min: 200 },
          items: 1
        }
      };



  return (
      <section>
          <div>
            <div className="container">
                 <div className="pt-10">
                    <div className="flex flex-wrap justify-between items-center mb-6 md:text-xl text-xs" >
                          <div className='flex flex-wrap justify-center items-center  px-3 gap-8'>
                            <h3 className='md:text-3xl text-2xl text-title font-semibold   '>Browse by Category</h3>
                              <div className='flex flex-wrap md:mt-3 text-color   items-center '>
                        <Link className='hover:text-primary transition-all text-sm flex flex-wrap gap-5 items-center' href="/cetagory" >All Cetagory<AiOutlineRight size={20}/></Link>
                              </div>

                          </div>
                          <div className='flex flex-wrap justify-between items-center gap-4'>
                            <AiOutlineLeft
                            className='bg-gray-100 text-gray-600 hover:text-primary transition-all '
                            size={18}/>  <AiOutlineRight
                               className='bg-gray-100 text-gray-600 hover:text-primary transition-all'
                               size={18} />
                               </div>
                    </div>
                    

                        {/* Homecetagoryhelpercard caresale */}
                        <div className=''>
                        <Carousel responsive={responsive}>
                        
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-1.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-2.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-3.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-4.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-5.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-6.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-7.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-8.png"
                               text="Fruits & Vegetables"
                             />
                            <Homecetagoryhelpercard
                              image="/icon/homepage-new-cat-4.png"
                               text="Fruits & Vegetables"
                             />
                     

  
  
</Carousel>;
                            
                        </div>

                    
                 </div>
            </div>
          </div>



      </section>
  )
}

export default Homecetagory