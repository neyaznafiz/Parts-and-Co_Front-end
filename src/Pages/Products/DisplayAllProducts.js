import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayAllProducts = ({ product }) => {

    const { _id, name, price, description, quantity, img } = product

    
    const navigate = useNavigate()
    const navigateToPurchase = id => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div className=''>

            <div class="card lg:card-side shadow-2xl bg-transparent">

                <figure><img src={img} alt="" className='lg:w-60 h-90' /></figure>

                <div class="card-body">
                    <h2 class="card-title text-stone-800">{name}</h2>

                    <p>{description?.slice(0, 110)}...</p>

                    <div className='flex mx-auto gap-10 py-4 text-lg'>
                        <p className='font-semibold text-stone-700'>Price: ${price}</p>
                        <p className='font-semibold text-stone-700'>Quantity: {quantity}</p>
                    </div>

                    <button onClick={()=> navigateToPurchase(_id)} className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black" > PURCHASE </button>

                </div>
            </div>

        </div>
    );
};

export default DisplayAllProducts;