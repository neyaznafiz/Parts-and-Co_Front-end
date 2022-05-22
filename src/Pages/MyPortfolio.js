import React from 'react';
import myimg from '../Asstes/Images/myimg.jpeg'
import projectone from '../Asstes/Images/projectone.png'
import projecttwo from '../Asstes/Images/projecttwo.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Footer from '../Components/Shared/Footer';

const MyPortfolio = () => {
    return (
        <div>

            {/* info section */}
            <div className=''>
                <div className="hero h-full py-20 bg-stone-400">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={myimg} alt='' className='h-[400px] rounded-full' />
                        <div>
                            <h1 className="lg:text-5xl text-3xl text-center font-bold text-stone-800">NEYAZ MOBALIK NAFIZ</h1>
                            <p className="py-6 px-20 text-xl text-center text-stone-800"> I am a Web Developer. Generally, I am good at HTML, CSS, JAVASCRIPT, BOOTSTRAP, TAILWIND, REACT and for backend I use MERN. I am comfortable in REACT, TAILWIND and MERN. I have done some projects. My background is in Computer Science and Technology and I am still studying. My future vision is I want to see myself in the future as a great programmer. My interest is in machine learning and ethical hacking. I hope, my hard work takes me to my goal.</p>


                        </div>
                    </div>
                </div>
            </div>

            {/* link section */}
            <div className='grid justify-center'>
                <div className='grid lg:flex justify-center gap-x-5 py-3 rounded-full bg-stone-500 w-[900px] -mt-9'>
                    <a href="https://dev.to/neyaznafiz" className='border-b border-stone-600 pr-3 flex w-[230px] text-stone-800 hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'>EXPLORE MY BLOGS <AiOutlineArrowRight className='mt-1 ' /> </span> </a>

                    <p className='border-b border-stone-600 px-3 pb-1 text-center w-[270px] text-stone-800'> <span className='flex gap-2 text-[20px] font-semibold '>neyaznafiz@outlook.com </span> </p>

                    <a href="https://github.com/neyaznafiz" className='border-b border-stone-600 pr-3 flex w-[260px] text-center text-stone-800 hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'>EXPLORE MY PROJECTS <AiOutlineArrowRight className='mt-1 ' /> </span> </a>



                </div>
            </div>

            {/* project section */}

            <div className='grid lg:flex justify-around gap-10 bg-stone-600 py-20 -mt-8'>

                <div className="card w-96 bg-stone-200 shadow-2xl border">
                    <figure><img src={projectone} alt="fashion flavour" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Fashion Flavour</h2>
                        <p>Fashion Flavour is a wahrehouse of Suit and littlebit of other Cloths and Shoes. You will get here lots of design suits and you will get also coustomaized suits. For seller, it's a best place to sell your fashion dresses. you can manage easily your all products and you can add your products easily to sell.</p>

                        <div className="card-actions justify-end">

                            <a href="https://fashion-flavour.web.app/" className='border-b border-stone-600 pr-3 flex text-center text-stone-800 hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'> CLICK HERE <AiOutlineArrowRight className='mt-1 ' /> </span> </a>
                        </div>
                    </div>

                </div>

                <div className="card w-96 bg-stone-200 shadow-2xl border">
                    <figure><img src={projecttwo} alt="fashion flavour" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">The Developer</h2>
                        <p>
                            The Developer is a web development service sebsite.
                            Here is 5 component Home, Service, Checkout Blog, About.
                            In blog page here some information about Authenticatin and Firebase.
                            In about page there is some information about this developer.
                            You can get web services from here. If you need anythying you can contact the developer.
                            Here is no hamburger menu, that's why the navbar is little bit wired. It will be added soon.
                        </p>

                        <div className="card-actions justify-end">
                            <a href="https://the-developer-neyaz.web.app/" className='border-b border-stone-600 pr-3 flex text-center text-stone-800 hover:text-stone-600'> <span className='flex gap-2 text-[20px] font-semibold'> CLICK HERE <AiOutlineArrowRight className='mt-1 ' /> </span> </a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default MyPortfolio;