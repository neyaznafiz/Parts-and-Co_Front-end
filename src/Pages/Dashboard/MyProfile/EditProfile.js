import React from 'react';
import { useForm } from 'react-hook-form';

const EditProfile = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    return (
        <div className='w-full'>

            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card shadow-2xl bg-transparent " style={{ 'borderRadius': '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 ">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4">ADD YOUR INFORMATION</p>

                                            <form >

                                                {/* city */}
                                                <div className="form-control bg-transparent border-0">

                                                    <label className="label">
                                                        <span className="label-text ">CITY</span>
                                                    </label>
                                                    <input type="text" placeholder="name" name="name" className="input input-bordered bg-transparent font-semibold text-lg"
                                                        {...register("city", {
                                                            required: {
                                                                value: true,
                                                                message: "city is required",
                                                            },
                                                            pattern: {
                                                                value: true,
                                                                message: "city name is not required",
                                                            },
                                                        })}
                                                    />
                                                    <label className="label">
                                                        {errors.city?.type === "required" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                        {errors.city?.type === "pattern" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                    </label>
                                                </div>


                                                {/* Degree Title */}
                                                <div className="form-control bg-transparent border-0">

                                                    <label className="label">
                                                        <span className="label-text uppercase">Degree Title</span>
                                                    </label>
                                                    <input type="text" placeholder="name" name="name" className="input input-bordered bg-transparent font-semibold text-lg"
                                                        {...register("city", {
                                                            required: {
                                                                value: true,
                                                                message: "city is required",
                                                            },
                                                            pattern: {
                                                                value: true,
                                                                message: "city name is not required",
                                                            },
                                                        })}
                                                    />
                                                    <label className="label">
                                                        {errors.city?.type === "required" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                        {errors.city?.type === "pattern" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                    </label>
                                                </div>


                                                {/* Institution Name  */}
                                                <div className="form-control bg-transparent border-0">

                                                    <label className="label">
                                                        <span className="label-text uppercase">Institution Name </span>
                                                    </label>
                                                    <input type="text" placeholder="name" name="name" className="input input-bordered bg-transparent font-semibold text-lg"
                                                        {...register("city", {
                                                            required: {
                                                                value: true,
                                                                message: "city is required",
                                                            },
                                                            pattern: {
                                                                value: true,
                                                                message: "city name is not required",
                                                            },
                                                        })}
                                                    />
                                                    <label className="label">
                                                        {errors.city?.type === "required" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                        {errors.city?.type === "pattern" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                    </label>
                                                </div>


                                                {/* phone */}
                                                <div className="form-control bg-transparent border-0">

                                                    <label className="label">
                                                        <span className="label-text">PHONE</span>
                                                    </label>
                                                    <input type="text" placeholder="name" name="name" className="input input-bordered bg-transparent font-semibold text-lg"
                                                        {...register("phone", {
                                                            required: {
                                                                value: true,
                                                                message: "phone is required",
                                                            },
                                                            pattern: {
                                                                value: true,
                                                                message: "phone name is not required",
                                                            },
                                                        })}
                                                    />
                                                    <label className="label">
                                                        {errors.phone?.type === "required" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                        {errors.phone?.type === "pattern" && (
                                                            <span className="label-text-alt text-red-500">
                                                                {errors.phone.message}
                                                            </span>
                                                        )}
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <input type="submit" value='ADD INFORMATION' className="btn btn-outline w-full px-3 py-1 rounded-md hover:bg-transparent hover:text-black" />
                                                </div>

                                            </form>

                                        </div>



                                    </div>
                                </div>

                                <div className=''>

                                    <div className='grid justify-center'>

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

export default EditProfile;