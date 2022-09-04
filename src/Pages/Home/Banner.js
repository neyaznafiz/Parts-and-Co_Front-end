import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import banner from '../../Asstes/Images/banner-w.png'

const Banner = () => {
    return (
        <div className="hero f-full lg:py-32" style={{ backgroundImage: "url('https://i.ibb.co/jrmFDDp/bg-2.jpg')", backgroundSize: 'cover' }}>

            <div className="hero-content flex-col lg:flex-row-reverse">

                
                        <div className="">
                            <img src={banner} alt="" className='lg:h-[550px]' />
                        </div>

                <div className='text-white'>
                    <h1 className="text-3xl lg:text-5xl font-bold ">Welcome to Parts & Co.</h1>

                    <p className="py-6 lg:pr-32 text-xl lg:w-[800px]">This is a mobile parts website. You can seel and buy mobile parts from heere. It's a wholeseel place. Here you can sell your product or buy anything very easily. Just get admin id and upload your product.</p>

                    <Link to='/allproducts' className='border-b border-stone-600 pr-3 flex w-[260px] text-center  hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'>EXPLORE PPRODUCTS <AiOutlineArrowRight className='mt-1 ' /> </span> </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;