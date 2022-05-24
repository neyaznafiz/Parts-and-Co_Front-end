import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {

    const { Id } = useParams()
    console.log(Id);

    const [products, setProducts] = useState({})
    console.log(products)
    const { name, img, price, quantity, orderQuantity, description } = products

    const [newQuantity, setNewQuantity] = useState(0)


    useEffect(() => {
        const url = `http://localhost:5000/singleProduct/${Id}`
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })

    }, [])


    const handleAddToOrder = event => {
        event.preventDefault()

        const buyerQuantity = event.target.buyer - quantity.value
        console.log(buyerQuantity);


    }


    return (
        <div className='bg-stone-400 h-screen lg:pt-28'>

            {Id ?
                <div class="card lg:card-side shadow-2xl bg-transparent m-10 lg:w-[600px] lg:mx-auto lg:grid ">

                    <figure><img src={img} alt="" className='lg:w-60 h-90' /></figure>

                    <div class="card-body">
                        <h2 class="card-title text-stone-800">{name}</h2>

                        <p>{description}</p>

                        <div className='flex mx-auto gap-10 pt-2 text-lg'>
                            <p className='font-semibold text-stone-700'>Available Quantity: {quantity}</p>
                            <p className='font-semibold text-stone-700'>Price: ${price}/pcs</p>
                        </div>

                        <form onSubmit={handleAddToOrder}>
                            <div className='grid justify-center pb-2'>
                                <label className="label">
                                    <span className="label-text font-semibold uppercase">minimum order quantity: {orderQuantity}</span>
                                </label>
                                <input type="number" name="buyer-quantity" className="input input-bordered bg-transparent font-semibold text-lg w-32 mx-auto" />
                            </div>


                            <div className='grid py-4 mx-auto'>
                                <input type='submit' value='SUBMIT' className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black" />
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div>
                    <div class="card lg:card-side shadow-2xl bg-transparent m-10 lg:w-[1200px] lg:mx-auto lg:grid p-10">

                        <p className='text-3xl text-center uppercase'>Please go to product page and select a product to purchage.</p>

                        <div className='grid py-4 mx-auto'>
                                <Link to='/allproducts' className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black">GO TO ALL PRODUCT </Link>
                            </div>

                    </div>
                </div>
            }


        </div>
    );
};

export default Purchase;