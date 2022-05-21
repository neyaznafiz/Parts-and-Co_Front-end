import React from 'react';
import { Link } from 'react-router-dom';
import Signupbg from '../../Asstes/Signupbg.jpg'
import SocialSignup from './SocialSignup';

const Login = () => {
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

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4">Log In</p>

                                            <form className="mx-1 mx-md-4">



                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-white bg-inherit" htmlFor="form3Example3c">Your Email</label>
                                                        <input type="email" id="form3Example3c" className="form-control border text-white" />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-white" htmlFor="form3Example4c">Password</label>
                                                        <input type="password" id="form3Example4c" className="form-control border text-white" />
                                                    </div>
                                                </div>

                                                <div className="grid lg:flex flex-row justify-center lg:justify-between align-items-center mb-4">
                                                    <div>
                                                    <p className='lg:pl-4 text-center'>Forget Password</p>
                                                    </div>

                                                    <div>
                                                        <p className='lg:pr-1'>Are you new here ? <Link to='/signup'>Sign Up</Link> </p>
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="border px-3 py-1 rounded-md hover:bg-white hover:text-black">Log In</button>
                                                </div>

                                            </form>

                                        </div>



                                    </div>
                                </div>

                                <div className=''>

                                    <div className='grid justify-center'>
                                        <SocialSignup></SocialSignup>
                                    </div>

                                    <span className="flex items-center mt-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
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

export default Login;