import React from 'react';
import CountUp from 'react-countup';
import { IoIosPeople } from 'react-icons/io';
import { MdRateReview } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div className='bg-stone-500 py-20 flex justify-center'>

            <div class="stats stats-vertical lg:stats-horizontal shadow bg-stone-300 lg:h-60 lg:w-full lg:mx-44">

                <div class="stat">
                    <div class="stat-title text-xl font-semibold flex">Coustomers <IoIosPeople className='mt-1 ml-2 text-2xl'/> </div>

                    <CountUp
                        start={33}
                        end={36}
                        duration={4}
                        suffix="K"
                        className='text-stone-800 text-4xl font-bold'
                    ></CountUp>

                    <div class="stat-desc text-xl">2012 - 2022</div>
                </div>

                <div class="stat">
                    <div class="stat-title text-xl font-semibold flex">New Coustomes <IoIosPeople className='mt-1 ml-2 text-2xl'/> </div>

                    <CountUp
                        start={2500}
                        end={4246}
                        duration={3}
                        suffix="K"
                        className='text-stone-800 text-4xl font-bold'
                    ></CountUp>

                    <div class="stat-desc  text-xl">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title text-xl font-semibold flex">Reviews <MdRateReview className='mt-2 ml-2 text-xl'/> </div>

                    <CountUp
                        start={38999}
                        end={53563}
                        duration={3}
                        suffix="K"
                        className='text-stone-800 text-4xl font-bold'
                    ></CountUp>

                    <div class="stat-desc text-xl">↗︎ Throw your feedback </div>
                </div>

            </div>

        </div>
    );
};

export default BusinessSummary;