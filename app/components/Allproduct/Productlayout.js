import React from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import FooterCard from '../footercard';
import Productlayouthelperplusandminus from '../shared/Productlayouthelperplusandminus';
import Cardhelperbreadcrumbs from '../shared/Cardhelperbreadcrumbs';

const Productlayout = () => {
    return (
        <div>
            <div className="container">
                <div className="py-7">
                <div className='flex flex-wrap'>
            {/* image */}
            <div className="border-r w-full md:w-2/5">
                <Image src='/icon/productlayout.jpg'
                    width={500}
                    height={100}
                    alt="">
                </Image>
               <div className='mt-10'>
               <Cardhelperbreadcrumbs/>
               </div>
            </div>


            <div className="px-5 w-full md:w-2/5">
                {/* middel price slider detials */}
                <div className='text-base text-color'>
                    <a href="/home">Home</a>
                    <span>/</span>
                    <a href="/shop">Shop</a>
                    <span>/</span>
                    <a href="/cetagory">Cetagory</a>
                    <span>/</span>
                    <a href="/breackfast-cereals">Breackfast Cereals</a>
                    <span>/</span>
                    <h3 className="text-xl text-title">-Bar S - Classic Bun Length Franks</h3>
                </div>
                <div className="pt-5">
                    <h1 className="font-semibold text-2xl">MartFury</h1>
                    <p className="text-3xl text-title ">Bar S - Classic Bun Length <br /> Franks</p>
                    <div className="mt-3 border-t">
                        <p className="flex flex-wrap mt-3 items-center text-primary text-xs">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span className="ml-3 text-color text-sm font-semibold">(1 customer review )</span>
                        </p>
                    </div>
                </div>
                <div className="mb-4">
                    <p className=" font-semibold text-color mt-2 mb-5">500g</p>
                    <span className="text-green-500 font-bold text-xl ">$35.00</span>
                </div>
                <div className="border bg-[#EBFAE9] mb-10 border-green-300 w-fit px-8 py-2 rounded-md ">
                    <p className="text-title text-base">Availability: <span className="text-green-600 font-semibold">In stock</span> </p>
                </div>

                <Productlayouthelperplusandminus/>

                {/* sku number */}
                <div className="border-t pt-4 ">
                    <p className="my-1 text-color" >SKU: <span className="text-title">#veg20967</span> </p>
                    <p className="my-1 text-color" >Brand: <span className="text-title">3docean</span> </p>
                    <p className="my-1 text-color" >Vendor: <span className=" text-primary text-sm font-semibold"><a className="hover:underline" href="./">MartFury</a></span> </p>
                    <p className="my-1 text-color " >Categories: <span className="text-title ">
                        <a className="hover:underline" href="BreackFast-Cereals">BreackFast Cereals</a>
                        <a className="hover:underline" href="chocolate">Chocolate and Sweets</a>
                        <a className="hover:underline" href="chips">Chips and Snack</a>
                        <a className="hover:underline" href="chips">Coconates and Milk</a>
                    </span> </p>
                    <p className="my-1 text-color" >Tag:
                        <span className="text-white p-1 rounded-md ml-1 bg-blue-600 "><a className="hover:underline" href="seller"> Best Seller</a></span> </p>
                </div>

            </div>
            {/* last wrapper right */}

            <div className="md:w-1/5 w-full ">
            <div className="bg-[#F3F3F3] mb-4  p-3 rounded-md ">
                   
                   <FooterCard
                       image="/icon/photoone.jpg"
                       shopping="Free Shipping"
                       order="For all orders over $200"
       
                     />
                <div className="border"></div>
                     <FooterCard
                       image="/icon/jpg.jpg"
                       shopping="1 & 1 Returns"
                       order="Cancellation after 1 day"
       
                     />
                     <div className="border"></div>
                     <FooterCard
                       image="/icon/photo3.jpg"
                       shopping="Secure Payment"
                       order="100% secure payments"
       
                     />
       
                   </div>
                   <div className="bg-[#F3F3F3] p-3 rounded-md py-8   ">
                    <h1 className="text-title font-semibold ">Hotlink Order</h1>
                    <p className="text-sm text-color">Mon - Fri: 7:00 am - 18:00PM</p>
                    <span className="font-bold text-xl ml-4">+019 473 - 77893</span>
                    
                   </div>
                   <div className="mt-6">
                    <h1 className="">Became a Vender <a className="text-primary hover:underline font-semibold" href="login">Register Now</a></h1>
                   </div>

            </div>




        </div>

                </div>
            </div>

        </div>
    )
}

export default Productlayout