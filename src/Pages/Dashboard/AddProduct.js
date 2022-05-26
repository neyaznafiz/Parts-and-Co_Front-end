import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Components/Shared/Loading';
import auth from '../../Firebase/firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: product, isLoading } = useQuery('product', () => fetch('https://sheltered-inlet-94910.herokuapp.com/product').then(res => res.json()))

    const imageStorageKey = 'da7a354ac5b93a961b8fece49f261619'


    const handleAddProduct = data => {
        console.log(data);
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('imagebb', result);
                if (result.success) {
                    const image = result.data.url

                    const product = {
                        email: data?.email,
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        orderQuantity: data.orderQuantity,
                        description: data.description,
                        img: image
                    }
                    // send to database
                    fetch('https://sheltered-inlet-94910.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(addedProduct => {
                            console.log(addedProduct);
                            if (addedProduct.insertedId) {
                                toast.success('Product added successfully')
                                reset()
                            }
                            else {
                                toast.error('Faild to add the product. Please try again.')
                            }
                        })
                }
            })

        if (isLoading) {
            return <Loading></Loading>
        }
    }

    return (
        <div className='lg:w-[500px]'>

            <div className="card bg-transparent shadow-xl mx-auto items-center mb-20">
                <div className="card-body">

                    <div className='text-center'>
                        <h2 className='text-3xl font-bold mb-3 '>ADDED YOUR PRODUCT HERE</h2>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(handleAddProduct)}>

                            <div className="form-control bg-transparent border-0">

                                <label className="label">
                                    <span className="label-text">YOUR EMAIL</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered bg-transparent font-semibold text-lg opacity-75" readOnly
                                    value={user?.email}
                                    {...register("email", {
                                        required: {
                                            message: "name is required",
                                        },
                                        pattern: {
                                            value: true,
                                            message: "Product name is not required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                    {errors.name?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <div className="form-control bg-transparent border-0">

                                <label className="label">
                                    <span className="label-text">PRODUCT NAME</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered bg-transparent font-semibold text-lg"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "name is required",
                                        },
                                        pattern: {
                                            value: true,
                                            message: "Product name is not required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                    {errors.name?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>


                            <div className="form-control bg-transparent border-0">
                                <label className="label">
                                    <span className="label-text">PRODUCT PRICE</span>
                                </label>
                                <input type="number" name="price" className="input input-bordered bg-transparent font-semibold text-lg"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: "price is required",
                                        },
                                        pattern: {
                                            value: true,
                                            message: "Please set a price",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.price.message}
                                        </span>
                                    )}
                                    {errors.price?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.price.message}
                                        </span>
                                    )}
                                </label>
                            </div>



                            <div className="form-control bg-transparent border-0">
                                <label className="label">
                                    <span className="label-text">AVAILABLE PRODUCT QUANTITY</span>
                                </label>
                                <input type="number" name="quantity" className="input input-bordered bg-transparent font-semibold text-lg"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: "quantity is required",
                                        },
                                        pattern: {
                                            value: true,
                                            message: "Your quantity is not required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                    {errors.quantity?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                </label>
                            </div>


                            <div className="form-control bg-transparent border-0">
                                <label className="label">
                                    <span className="label-text">MINIMUM ORDER QUANTITY</span>
                                </label>
                                <input type="number" name="quantity" className="input input-bordered bg-transparent font-semibold text-lg"
                                    {...register("orderQuantity", {
                                        required: {
                                            value: true,
                                            message: "Order quantity is required",
                                        },
                                        pattern: {
                                            value: true,
                                            message: "Your order quantity is not required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                    {errors.quantity?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                </label>
                            </div>


                            <div className="form-control bg-transparent border-0">
                                <label className="label">
                                    <span className="label-text">PRODUCT IMAGE</span>
                                </label>
                                <input type="file" name="image" className="form-control h-10 input input-bordered bg-transparent font-semibold text-lg"
                                    {...register("img", {
                                        required: {
                                            value: true,
                                            message: "img is required",
                                        },
                                        pattern: {
                                            value: true,
                                            message: "Please set the product image.",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.img?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.img.message}
                                        </span>
                                    )}
                                    {errors.img?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.img.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <div className="form-control bg-transparent border-0">
                                <label className="label">
                                    <span className="label-text">PRODUCT DESCRIPTION</span>
                                </label>
                                <textarea type="text" name="description" className="input input-bordered bg-transparent h-20 font-semibold text-lg"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "description is required",
                                        },
                                        minLength: {
                                            value: 50,
                                            message: "Your description must be 35 character",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.description.message}
                                        </span>
                                    )}
                                    {errors.description?.type === "minLength" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.description.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <input type="submit" value='ADD PRODUCT' className="btn btn-outline w-full px-3 py-1 rounded-md hover:bg-transparent hover:text-black" />

                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default AddProduct;