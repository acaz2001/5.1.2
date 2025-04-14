import Image from "next/image";
import { FaShopify } from "react-icons/fa";
import { Inter } from 'next/font/google'
import { LuArrowUpRight } from "react-icons/lu";
import "./globals.css";
import { GoArrowRight } from "react-icons/go";
import MostPopular from "../components/mostPopular";
import Testimonials from "../components/testimonials";
import OurCollections from "../components/ourCollections";
import AboutProd from "../components/aboutProd";
import BlogBanner from "../components/blogBanner";
import MoreBanner from "../components/moreBanner";


export default function Home() {
  return (
    <main>
        <section className="custom-box">
        {/*<div class="cutout"></div> */}
          <div className="bg-[url(/clark-van-der-beken-Tk0B3Dfkf_4-unsplash.jpg)] rounded-2xl flex flex-col gap-[2rem] pl-20 pt-38 pb-30 pr-30">
            <div className="bg-white w-fit p-1 rounded-2xl flex flex-row items-center gap-[0.5rem]">
              <FaShopify/>
              <p className="text-[0.8rem]">Powered by Shopify</p>
            </div>
    
            <div>
              <h1 style={{width:'65%', lineHeight:'1.1'}} className="text-[4.2rem] tracking-tight">The <span className="text-[#8345d8]">beautiful</span> way to sell anything with Framer.</h1>
              <p style={{width:'40%'}} className="text-[1.2rem] text-[#6c6474] mt-6" >Designed with Framer, this template makes it easy to turn your website into a powerful ecommerce store.</p>
            </div>
            <div className="bg-gray-400 w-fit rounded-3xl flex flex-row items-center gap-[2rem] pl-7 pr-1 pt-1 pb-1 ">
              <h4 className="text-[1rem]">Shop Products</h4>
              <icon className='bg-white rounded-full p-3 '><LuArrowUpRight className=" text-[1.2rem] " /></icon>
            </div>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between mt-8 mb-8">
          <div>
            <h1 className="text-[1.3rem]">Most Popular</h1>
            <p className="text-[#6c6474] mt-1.5">
            Showcase your most popular products, front and center.
            </p>
          </div>
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 ">
            <p>View All</p>
            <GoArrowRight />
          </div>
        </section>

        <MostPopular></MostPopular>

        <Testimonials></Testimonials>


        <section className="flex flex-row items-center justify-between mt-8 mb-8">
          <div>
            <h1 className="text-[1.3rem]">Our Collections</h1>
            <p className="text-[#6c6474] mt-1.5">
            Showcase all of the different collections you have to offer.
            </p>
          </div>
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 ">
            <p>View All</p>
            <GoArrowRight />
          </div>
        </section>


        <OurCollections></OurCollections>

        <section className="flex flex-col items-center mt-20">
          <h1 className="text-[2.5rem] font-medium">
          Highlight what makes you stand out
          </h1>
          <p className="text-[#6c6474] mt-4">
          Use this section to show off the key features like these.
          </p>
        </section>

        <AboutProd></AboutProd>

        <section className="flex flex-row items-center justify-between mt-20  mb-8">
          <div>
            <h1 className="text-[1.3rem]">Explore the blog</h1>
            <p className="text-[#6c6474] mt-1.5">
            Share insights, boost SEO, and build trust with your audience.
            </p>
          </div>
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 ">
            <p>View Posts</p>
            <GoArrowRight />
          </div>
        </section>

        <BlogBanner></BlogBanner>

        <MoreBanner></MoreBanner>


    </main>
  );
}
