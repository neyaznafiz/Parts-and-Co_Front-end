import React from 'react';
import { useForm } from 'react-hook-form';

const AddaReview = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => { };

    return (
        <div>
            <div className="card lg:w-[500px] lg:h-[400px] bg-base-100 shadow-xl mx-auto items-center mb-20 bg-transparent">
                <div className="card-body w-full">
                    <h2 className="text-center text-2xl font-bold pb-7">WELCOME TO REVIEW SECTION</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control  max-w-xs bg-transparent border-0">
                                <label className="label">
                                    <span className="label-text">TYPE YOUR REVIEW</span>
                                </label>
                                <textarea type="text" placeholder="yourReview" name="yourReview" className="input input-bordered lg:w-[410px] h-[] h-[100px] bg-transparent"
                                    {...register("yourReview", {
                                        required: {
                                            value: true,
                                            message: "yourReview is required",
                                        },
                                        minLength: {
                                            value: 40,
                                            message: "your yourReview  must be 40 character",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.yourReview?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.yourReview.message}
                                        </span>
                                    )}
                                    {errors.yourReview?.type === "minLength" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.yourReview.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <input type="submit" value='SUBMIT' className="btn btn-outline w-full px-3 py-1 rounded-md hover:bg-transparent hover:text-black" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddaReview;