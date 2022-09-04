import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Signupbg from '../../Asstes/Signupbg.jpg'
import Loading from '../../Components/Shared/Loading';
import auth from '../../Firebase/firebase.init';
import useToken from '../../Hooks/useToken';
import SocialSignup from './SocialSignup';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const [updateProfile, updating, updateError] = useUpdateProfile(auth)

    const [token] = useToken(user)


    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"


    if (error) {
        toast.error(<p>Error: {error.message}</p>)
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
        toast.success('Congratulation ! You are Loged In successfully. Enjoy our more feature of our website.')
    }

    const handleSignup = async data => {

     await createUserWithEmailAndPassword(data.email, data.password)
     await updateProfile({ displayName: data.name })
     toast.success('Your profile was updated')
        console.log('update done')

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

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4">Sign up</p>

                                            <form onSubmit={handleSubmit(handleSignup)}>

                                                {/* name */}
                                                <div className="form-control w-full bg-transparent border-0">
                                                    <label className="form-label text-white ">Your Name</label>
                                                    <input type="text"
                                                        className="input input-bordered w-full bg-transparent border text-white"
                                                        {...register("name", {
                                                            required: {
                                                                value: true,
                                                                message: 'Name is Required'
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                                    </label>

                                                </div>

                                                {/* email */}
                                                <div className="form-control w-full bg-transparent border-0">
                                                    <label className="form-label text-white bg-inherit">Your Email</label>
                                                    <input type="email"
                                                        placeholder="Your Email"
                                                        className="input input-bordered w-full bg-transparent border text-white"
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

                                                {/* password */}
                                                <div className="form-control w-full bg-transparent border-0">
                                                <label className="form-label text-white">Password</label>
                                                    <input type="password"
                                                        placeholder="Password"
                                                        className="input input-bordered w-full bg-transparent border text-white"
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

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <input type="submit" value='Sign Up' className="border px-3 py-1 rounded-md hover:bg-white hover:text-black" />
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

export default Signup;