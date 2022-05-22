import React from 'react';
import myimg from '../Asstes/Images/myimg.jpeg'
import { AiOutlineArrowRight } from 'react-icons/ai';

const MyPortfolio = () => {
    return (
        <div>

            <div class="hero h-full py-20 bg-stone-400">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={myimg}  alt='' className='h-[400px] rounded-full'/>
                    <div>
                        <h1 class="lg:text-5xl text-3xl text-center font-bold text-stone-800">NEYAZ MOBALIK NAFIZ</h1>
                        <p class="py-6 px-20 text-xl text-center text-stone-800"> I am a Web Developer. Generally, I am good at HTML, CSS, JAVASCRIPT, BOOTSTRAP, TAILWIND, REACT and for backend I use MERN. I am comfortable in REACT, TAILWIND and MERN. I have done some projects. My background is in Computer Science and Technology and I am still studying. My future vision is I want to see myself in the future as a great programmer. My interest is in machine learning and ethical hacking. I hope, my hard work takes me to my goal.</p>
                        
                        
                    </div>
                </div>
            </div>

            {/* link section */}
            <div className='grid justify-center'>
            <div className='grid lg:flex justify-center gap-x-5 py-3 rounded-full bg-stone-500 w-[900px] -mt-9'>
                            <a href="https://dev.to/neyaznafiz" className='border-b border-stone-600 pr-3 flex w-[230px] text-stone-800 hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'>EXPLORE MY BLOGS <AiOutlineArrowRight className='mt-1 '/> </span> </a>

                            <a href="https://github.com/neyaznafiz" className='border-b border-stone-600 pr-3 flex w-[260px] text-center text-stone-800 hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'>EXPLORE MY PROJECTS <AiOutlineArrowRight className='mt-1 '/> </span> </a>

                            <p className='border-b border-stone-600 pr-3 flex w-[270px] text-stone-800'> <span className='flex gap-2 text-[20px] font-semibold'>neyaznafiz@outlook.com <AiOutlineArrowRight className='mt-1 '/> </span> </p>
                            

                        </div>
            </div>
            

        </div>
    );
};

export default MyPortfolio;