import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { Id } = useParams()
    console.log(Id);

    const [products, setProducts] = useState({})
    console.log(products)

    const { name, img, price, quantity, description } = products


    useEffect(() => {
        const url = `http://localhost:5000/pareses/${Id}`
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })

    }, [])

    return (
        <div className='bg-stone-400 lg:h-screen lg:pt-28'>

            <div class="card lg:card-side shadow-2xl bg-transparent m-10 lg:w-[600px] lg:mx-auto lg:grid ">

                <figure><img src={img} alt="" className='lg:w-60 h-90' /></figure>

                <div class="card-body">
                    <h2 class="card-title text-stone-800">{name}</h2>

                    <p>{description}</p>

                    <div className='flex mx-auto gap-10 py-4 text-lg'>
                        <p className='font-semibold text-stone-700'>Price: ${price}</p>
                        <p className='font-semibold text-stone-700'>Quantity: {quantity}</p>
                    </div>

                    <button className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black" > ADD TO ORDER </button>

                </div>
            </div>


        </div>
    );
};

export default Purchase;