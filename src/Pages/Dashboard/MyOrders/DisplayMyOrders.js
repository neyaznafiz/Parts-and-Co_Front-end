import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const DisplayMyOrders = ({ order, handleOrderCancle }) => {

    const { _id, email, name, totalPrice, orderQuantity, phoneNumber, address } = order


    const [paid, setPaid] = useState([])

    const { transactionId } = paid
    console.log(transactionId);

    useEffect(() => {
        fetch('http://localhost:5000/paidproduct')
            .then(res => res.json())
            .then(data => {
                setPaid(data)
            })
    }, [])



    return (
        <div >
            <div className="card w-96 bg-transparent shadow-2xl text-neutral-content">
                <div className="card-body items-center text-center text-stone-600">
                    <h2 className="card-title ">{name}</h2>
                    <p className='font-semibold'>ORDER QUANTITY : {orderQuantity}</p>
                    <p className='font-semibold'>TOTAL PRICE : ${totalPrice}</p>
                    {/* <div className="card-actions justify-end"> */}

                    {!transactionId ?
                        <div className='flex gap-x-5'>
                            <button onClick={() => handleOrderCancle(_id)} className="btn btn-outline  mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black"> CANCEL </button>
                            {totalPrice &&
                                <Link to={`/dashboard/payment/${_id}`} className="btn btn-outline mx-auto px-7 py-1 rounded-md hover:bg-transparent hover:text-black"> PAY </Link>
                            }
                        </div>
                        :
                        <div>
                            <p>YOUR TRANSACTION ID IS : {transactionId}</p>
                        </div>
                    }
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default DisplayMyOrders;