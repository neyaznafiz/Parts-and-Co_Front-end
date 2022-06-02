import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import banner from '../../Asstes/Images/banner.png'

const Banner = () => {
    return (
        <div className="hero f-full py-20 bg-stone-400">

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">

                        <div className="artboard artboard-demo phone-1 bg-stone-400">
                            <img src={banner} alt="" className='h-72 w-[300px] ' />
                        </div>

                    </div>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-stone-800">Welcome to Parts & Co.</h1>

                    <p className="py-6 pr-32 text-xl lg:w-[800px]">This is a mobile parts website. You can seel and buy mobile parts from heere. It's a wholeseel place. Here you can sell your product or buy anything very easily. Just get admin id and upload your product.</p>

                    <Link to='/allproducts' className='border-b border-stone-600 pr-3 flex w-[260px] text-center text-stone-800 hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'>EXPLORE PPRODUCTS <AiOutlineArrowRight className='mt-1 ' /> </span> </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;