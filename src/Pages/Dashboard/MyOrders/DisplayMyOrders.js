import React from 'react';
import { Link } from 'react-router-dom';

const DisplayMyOrders = ({ order,  handleOrderCancle }) => {

    const { _id, email, name, totalPrice, orderQuantity, phoneNumber, address } = order

    return (
        <div >
            <div class="card w-96 bg-transparent shadow-2xl text-neutral-content">
                <div class="card-body items-center text-center text-stone-600">
                    <h2 class="card-title ">{name}</h2>
                    <p className='font-semibold'>ORDER QUANTITY : {orderQuantity}</p>
                    <p className='font-semibold'>TOTAL PRICE : ${totalPrice}</p>
                    <div class="card-actions justify-end">
                       
                    <div className='flex gap-x-5'>
                    <button onClick={()=> handleOrderCancle(_id)} className="btn btn-outline  mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black"> CANCEL </button>
                    {totalPrice  && 
                        <Link to={`/dashboard/payment/${_id}`} className="btn btn-outline mx-auto px-7 py-1 rounded-md hover:bg-transparent hover:text-black"> PAY </Link>
                        }
                    {/* {(totalPrice && paid) &&
                        <span className='text-green-400'>PAID</span>
                        } */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayMyOrders;