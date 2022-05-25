import React from 'react';
import { Link } from 'react-router-dom';

const DisplayMyOrders = ({ order }) => {

    const { email, name, price, orderQuantity, phoneNumber, address } = order

    return (
        <div >
            <div class="card w-96 bg-transparent shadow-2xl text-neutral-content">
                <div class="card-body items-center text-center text-stone-600">
                    <h2 class="card-title ">{name}</h2>
                    <p className='font-semibold'>ORDER QUANTITY : {orderQuantity}</p>
                    <p className='font-semibold'>TOTAL PRICE : {price}</p>
                    <div class="card-actions justify-end">
                       
                    <div className='flex gap-x-5'>
                    <button className="btn btn-outline  mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black"> CANCEL </button>
                    <button className="btn btn-outline mx-auto px-7 py-1 rounded-md hover:bg-transparent hover:text-black"> PAY </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayMyOrders;