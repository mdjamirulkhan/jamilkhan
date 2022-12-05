import Image from "next/image";
import FooterCard from "../components/footercard"

import { BsTelephone } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
export default function footer() {
  return (
    <footer className=" ml-6" >

      <div className="container">

        <div className="border-b border-slate-200">
          <div className="bg-white">
            <div className="flex py-7  flex-wrap justify-between space-x-5">
              <FooterCard
                image="/icon/photoone.jpg"
                shopping="Free Shopping"
                order="For all orders over $200"

              />
              <FooterCard
                image="/icon/jpg.jpg"
                shopping="100% Secure Payment"
                order="Gurantee secure payments"

              />
              <FooterCard
                image="/icon/photo3.jpg"
                shopping="24/7 Dedicated Support"
                order="Anywhere & anytime"

              />
              <FooterCard
                image="/icon/photo4.jpg"
                shopping="Daily Offers"
                order=" Discount up to 70% OFF"

              />
              <FooterCard
                image="/icon/photo5.jpg"
                shopping="1 & 1 Returns"
                order="Cancellation after 1 day"

              />
            </div>
          </div>
        </div>
        {/*gooter weight*/}
        <div className="mt-12 flex flex-wrap justify-between  " >
          <div className="w-72 md:min-w-[100px] sm:min-w-[50px] mb-10">
            <h1 className="font-semibold text-color text-xl mb-9">Farmart - Your Online Foods & Grocery</h1>
            <p className="text-md  text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam vulputate et justo eget scelerisque.</p>
            <div>
              <div className="my-6 ">

                <p className="text-base flex gap-4 " > <BsTelephone className="mt-1" /> Hotline 24/7:</p>
                <h3 className="text-2xl text-color font-bold  ml-8 ">(+019) 47377893</h3>
              </div>
              <div className="flex gap-4 text-color text-[18px]">
                <AiOutlineHome />
                <p> 959 Homestead Street Eastlake, NYC</p>
              </div >

              <div className="flex text-color items-center gap-4">
                <HiOutlineMail /> support@farmart.com

              </div>
            </div>

          </div>

          {/* footer ulli */}
          <div className=" px-6 ">
            <h1 className="font-semibold text-color text-xl mb-5">Useful Links</h1>

            <ul className="text-color">
              <li className="mb-3"><a href="about">About Us</a></li>
              <li className="mb-3"><a href="contact">Contact</a></li>
              <li className="mb-3"><a href="help">Help Center</a></li>
              <li className="mb-3"><a href="Career">Career</a></li>
              <li className="mb-3"><a href="Policy">Policy</a></li>
              <li className="mb-3"><a href="Official">Official</a></li>
              <li className="mb-3"><a href="Sitemap">Sitemap</a></li>
              <li className="mb-3"><a href="Flash Sale">Flash Sale</a></li>

            </ul>
          </div>
          {/* secend footer ulli */}
          <div className=" px-6 ">
            <h1 className="font-semibold text-color text-xl mb-5">Help Center</h1>

            <ul className="text-color">
              <li className="mb-3"><a href="about">Payments</a></li>
              <li className="mb-3"><a href="contact">Shopping</a></li>
              <li className="mb-3"><a href="help"> Product Returns</a></li>
              <li className="mb-3"><a href="Career">FAQ</a></li>
              <li className="mb-3"><a href="products">products</a></li>
              <li className="mb-3"><a href="checkout">Checkout</a></li>

            </ul>
          </div>

          <div className=" px-6 w-80">
            <h1 className="font-semibold text-color text-xl mb-5">Useful Links</h1>

            <p className="text-color">Register now to get updates on promotions and coupns. Dont worry! We not spam</p>
            <div className="flex mt-6">
              <div className="bg-white border border-gray-300 p-1 rounded-sm flex    items-center flex-wrap ">
                <HiOutlineMail className="mr-4" />
                <input type="email" className="outline-none py-2 w-36 text-color " placeholder="Your email" />
              </div>
              <button className="bg-primary rounded-sm font-semibold px-1 -ml-2 text-title">Subscribe</button>
            </div>
          </div>



        </div>



        <div className="flex justify-between py-6 border-t border-gray-200 md:text-base text-xs">
          <p >@ {new Date().getFullYear()} <a href="https://www.facebook.com/profile.php?id=100026912299671">all <span className="underline text-title font-bold">Formart</span>  Reserve by Jamirul </a> </p>
          <Image src="/icon/lastphoto.png" alt="" width={200} height={100}  >

          </Image>
        </div>


      </div>



    </footer >

  )
}
