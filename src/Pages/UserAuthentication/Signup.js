import React from 'react';
import { Link } from 'react-router-dom';
import Signupbg from '../../Asstes/Signupbg.jpg'
import SocialSignup from './SocialSignup';

const Signup = () => {
    return (
        <div className='w-full'>

            <section style={{ background: `url(${Signupbg})`, backgroundSize: 'cover' }} className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-white bg-transparent" style={{ 'borderRadius': '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control border text-white" />
                                                        <label className="form-label text-white " htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control border text-white" />
                                                        <label className="form-label text-white bg-inherit" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control border text-white" />
                                                        <label className="form-label text-white" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control border text-white" />
                                                        <label className="form-label text-white" htmlFor="form3Example4cd">Confirm password</label>
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="border px-3 py-1 rounded-md hover:bg-white hover:text-black">Sign Up</button>
                                                </div>


                                                
                                                    <div className='text-center'>
                                                        <p className='lg:pr-1'>Already have an account ? <Link to='/login'> Log In</Link> </p>
                                                    </div>
                                                

                                            </form>

                                        </div>



                                    </div>
                                </div>

                                <div className=''>

                                    <div className='grid justify-center'>
                                    <SocialSignup></SocialSignup>
                                    </div>

                                    <span class="flex items-center mt-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Signup;