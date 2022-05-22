import React from 'react';

const NewsLeter = () => {
    return (
        <div>
            <div className=' relative my-10 py-20 lg:py-40 w-full bg-no-repeat bg-stone-500'>

                <div className='text-center'>
                    <h2 className='font-serif text-md lg:text-3xl pb-3 text-slate-300 '>Subscribe for get newsleter about new technologies in every month.</h2>

                    <div className='grid lg:flex justify-center lg:pr-12 lg:mt-20 opacity-75'>
                        <input className='rounded-full border-2 lg:pr-40 pl-5 py-2 card-shadow' type="email" name="email" id="" placeholder='ENTER YOUR EMAIL' required />

                        <button className=' lg:absolute lg:ml-80 rounded-full font-semibold bg-zinc-800 text-white px-3 py-2 border-2'>SUBSCRIBE</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsLeter;