import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { Id } = useParams()
    console.log(Id);

    const [products, setProducts] = useState({})
    console.log(products)
    const { name, img, price, quantity, description } = products

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

        const buyerQuantity = event.target.buyer-quantity.value
        console.log(buyerQuantity);

        // if (newQuantity > 0) {
        //     const updatedData = quantity - coustomerQuantity
        //     setNewQuantity(updatedData)

        //     const url = `https://cryptic-stream-11517.herokuapp.com/dress/${Id}`

        //     fetch(url, {
        //         method: 'PUT',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify({ updatedData })
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             // setProduct(data)
        //             // alert('quantity updatted')
        //         })
        // }
    }


    return (
        <div className='bg-stone-400 lg:h-screen lg:pt-28'>

            <div class="card lg:card-side shadow-2xl bg-transparent m-10 lg:w-[600px] lg:mx-auto lg:grid ">

                <figure><img src={img} alt="" className='lg:w-60 h-90' /></figure>

                <div class="card-body">
                    <h2 class="card-title text-stone-800">{name}</h2>

                    <p>{description}</p>

                    <div className='flex mx-auto gap-10 pt-2 text-lg'>
                        <p className='font-semibold text-stone-700'>Price: ${price}</p>
                        <p className='font-semibold text-stone-700'>Quantity: {quantity}</p>
                    </div>

                    <form onSubmit={handleAddToOrder}>
                        <div className='grid justify-center pb-2'>
                            <label className="label">
                                <span className="label-text font-semibold">SET THE QUANTITY YOU WANT</span>
                            </label>
                            <input type="number" name="buyer-quantity" id="" className="input input-bordered bg-transparent font-semibold text-lg w-52" />
                        </div>


                        <input type='submit' value='SUBMIT' className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Purchase;