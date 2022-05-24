import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Signupbg from '../../Asstes/Signupbg.jpg'
import SocialSignup from './SocialSignup';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Components/Shared/Loading';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [token] = useToken(user)

    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/"

    if (error) {
        toast.error(<p>Error: {error.message}</p>)
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

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

                                            <form onSubmit={handleSubmit(handleLogin)}>

                                                <div className="form-control w-full bg-transparent border-0 ">
                                                    <label className="form-label text-white bg-inherit" >Your Email</label>
                                                    <input type="email"
                                                        className="input input-bordered bg-transparent border text-white"
                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: 'Email is Required'
                                                            },
                                                            pattern: {
                                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                                message: 'Provide a valid email please'
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                    </label>

                                                </div>

                                                <div className="form-control w-full bg-transparent border-0">
                                                    <label className="form-label text-white">Password</label>
                                                    <input type="password"
                                                        className="input input-bordered  bg-transparent border text-white"
                                                        {...register("password", {
                                                            required: {
                                                                value: true,
                                                                message: 'Password is Required'
                                                            },
                                                            minLength: {
                                                                value: 6,
                                                                message: 'Must be 6 characters or longer'
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                    </label>
                                                </div>

                                                <div className="grid lg:flex flex-row justify-center lg:justify-between align-items-center mb-4">
                                                    <div>
                                                        <p className='lg:pl-4 text-center'>Forget Password</p>
                                                    </div>

                                                    <div>
                                                        <p className='lg:pr-3'>Are you new here ? <Link to='/signup'>Sign Up</Link> </p>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <input type="submit" value='log In' className="border px-3 py-1 rounded-md hover:bg-white hover:text-black" />
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