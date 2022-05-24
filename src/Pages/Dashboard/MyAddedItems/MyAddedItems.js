import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import DisplayMyAddedItems from './DisplayMyAddedItems';
const axios = require('axios');


const MyAddedItems = () => {

    // const [user] = useAuthState(auth)
    // const [product, setProduct] = useState([])

    // const navigate = useNavigate();


    // useEffect(() => {

    //     const getProductsFilterByEmail = async () => {

    //         const email = user.email;

    //         const url = `http://localhost:5000/myaddedproduct?email=${email}`;
    //         // const url = `http://localhost:5000/myaddedproduct?email=${email}`;
    //         try {
    //             const { data } = await axios.get(url, {
    //                 headers: {
    //                     authorization: `Bearer ${localStorage.getItem('accessJwtToken')}`
    //                 }
    //             });
    //             console.log(data);
    //             setProduct(data);
    //         }
    //         catch (error) {
    //             if (error?.response?.status === 401 || error?.response?.status === 403) {
    //                 signOut(auth);
    //                 navigate('/login')
    //             }
    //         }
    //     }
    //     getProductsFilterByEmail()
    // }, [user, product])


    // const [product, setProduct] = useState([])
    // const [user] = useAuthState(auth);

    // const Navigate = useNavigate()

    // useEffect(() => {
    //     if (user) {
    //         fetch(`https://whispering-refuge-29775.herokuapp.com/booking?patient=${user.email}`, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => {
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem('accessToken')
    //                     Navigate('/')
    //                 }
    //                 return res.json()
    //             })
    //             .then(data => {

    //                 setProducts(data)
    //             })
    //     }
    // }, [user])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-60 pb-10 px-10 '>
            {
                // product.map(product => <DisplayMyAddedItems
                //     key={product._id}
                //     product={product}
                // ></DisplayMyAddedItems>)
            }
        </div>
    );
};

export default MyAddedItems;