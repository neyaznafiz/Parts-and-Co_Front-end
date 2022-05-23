import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddProduct = () => {


    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const { data: product, isLoading } = useQuery('product', () => fetch('http://localhost:5000/product').then(res => res.json()))

    const imageStorageKey = 'da7a354ac5b93a961b8fece49f261619'

    const handleAddProduct =  data => {
        // console.log(data);
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
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        img: image
                    }
        //             // send to database
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
        //                     // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then( addedProduct => {
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
                                    <span className="label-text">NAME</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered bg-transparent"
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
                                    <span className="label-text">PRICE</span>
                                </label>
                                <input type="number" name="price" className="input input-bordered bg-transparent"
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
                                    <span className="label-text">QUANTITY</span>
                                </label>
                                <input type="number" name="quantity" className="input input-bordered bg-transparent"
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
                                    <span className="label-text">IMAGE</span>
                                </label>
                                <input type="file" name="image" className="form-control h-10 input input-bordered bg-transparent"
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
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" name="description" className="input input-bordered bg-transparent h-20"
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