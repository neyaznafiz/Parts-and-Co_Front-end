import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import DisplayProductsInHome from './DisplayProductsInHome';

const ProductsInHome = () => {

    const [products] = useProducts()

    return (

        <div className=''>

            <div className='pt-10'>
                <p className='text-center text-2xl lg:text-4xl uppercase'>get here your needed parts</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 p-3 lg:px-10 '>
                {
                    [...products].reverse().slice(0, 2).map(product => <DisplayProductsInHome
                        key={product._id}
                        product={product}
                    />)
                }
            </div>

            <div className='flex justify-end mx-16 pb-4 lg:pb-10'>
                <div></div>
                <Link to='/allproducts' className='border-b border-stone-600 pr-3 flex w-[260px] text-center  hover:text-black/60'> <span className='flex gap-2 text-[20px] font-semibold'>SEE ALL PPRODUCTS <AiOutlineArrowRight className='mt-1 ' /> </span> </Link>
            </div>

        </div>
    );
};

export default ProductsInHome;