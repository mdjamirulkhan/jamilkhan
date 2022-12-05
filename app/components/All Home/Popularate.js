import Popularatehelper from "../shared/Popularatehelper"
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Link from "next/link";
const Popularate = () => {
  return (
    <section>

      <div>
        <div className="container">
          <div>
            <div className="flex flex-wrap justify-between items-center mb-6 md:text-xl text-xs" >
              <div className='flex flex-wrap justify-center items-center  px-3 gap-8'>
                <h3 className='md:text-3xl text-2xl text-title font-semibold   '>Featured Brands</h3>
                <div className='flex flex-wrap md:mt-3 text-color   items-center '>
                  <Link className='hover:text-primary transition-all flex flex-wrap gap-5 items-center text-sm' href="/cetagory" >All offers<AiOutlineRight size={20} /></Link>
                </div>

              </div>
              <div className='flex flex-wrap justify-between items-center gap-4'>
                <AiOutlineLeft
                  className='bg-gray-100 text-gray-600 hover:text-primary transition-all '
                  size={18} />  <AiOutlineRight
                  className='bg-gray-100 text-gray-600 hover:text-primary transition-all'
                  size={18} />
              </div>
            </div>

            <div className="">
              <div className=" flex gap-2 overflow-x-auto wrapper">
                <Popularatehelper
                  image={"/icon/homepage-new-brand-img-1.png"}
                  title="IDEA JSC"
                  bodyLink=" Happy Tea 100% Organic from "
                  percend="29%"
                />
                <Popularatehelper
                  image={"/icon/homepage-new-brand-img-2.png"}
                  title="FOODPOUCH"
                  bodyLink=" New Snacks Release "

                />
                <Popularatehelper
                  image={"/icon/homepage-new-brand-img-3.png"}
                  title="SODA BRAND"
                  bodyLink=" Soda Can Box 24 Pieces - 30% OFF"

                />
                <Popularatehelper
                  image={"/icon/homepage-new-brand-img-4.png"}
                  title="FARMART"
                  bodyLink="Fresh Meat Saugage.BUY 2 GET 1!"
                />
                <Popularatehelper
                  image={"/icon/homepage-new-brand-img-2.png"}
                  title="SODA BRAND"
                  bodyLink=" Soda Can Box 24 Pieces - 30% OFF"
                />

              </div>
            </div>

          </div>
        </div>
      </div>



    </section>
  )
}

export default Popularate