import React from 'react';
import { GrChatOption, GrDeliver, GrCart } from 'react-icons/gr';

const OurInfo = () => {
    return (
        <div className='text-black mx-10'>

            <div className='text-center py-10 lg:py-32 mx-auto'>
                <p className='text-4xl font-bold'>Why Choose Us?</p>
                <p className='lg:w-[570px] mx-auto my-7 text-xl'>We’ve been Selling Phone Parts and Accessories for the last 10 years. We present The Best Shopping site to Buy Phone Parts in Bangladesh. If you choose our website for Buy Mobile Parts you not mistaken, and we always treat customers with respect.</p>
                <p className='py-10 text-xl'>First-class customer support available 24 hours a day by phone, chat, and email.</p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-48 pb-10'>

                <div className='grid mx-auto'>
                    <div className='mx-auto'>
                        <GrDeliver  className='text-9xl'/>
                    </div>
                    <div className='text-center pt-2'>
                        <p className='text-2xl font-semibold pb-2'>Fast Delivery</p>
                        <p className='text-xl'>All Bangladesh Free Shipping with Fast Delivery in 24 hours.</p>
                    </div>
                </div>

                <div className='grid mx-auto'>
                    <div className='mx-auto'>
                        <GrChatOption className='text-9xl' />
                    </div>
                    <div className='text-center pt-2'>
                        <p className='text-2xl font-semibold pb-2'>Outstanding support</p>
                        <p className='text-xl'>First-class customer support available 24 hours a day by phone, chat.</p>
                    </div>
                </div>

                <div className='grid mx-auto'>
                    <div className='mx-auto'>
                        <GrCart className='text-9xl' />
                    </div>
                    <div className='text-center pt-2'>
                        <p className='text-2xl font-semibold pb-2'>Secure checkout</p>
                        <p className='text-xl'>With 128-bit SSL security with advanced encryption you are guaranteed that your purchases are safe.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurInfo;