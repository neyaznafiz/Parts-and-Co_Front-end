import React from 'react';

const AddProduct = () => {
    return (
        <div className='lg:w-[500px]'>

            <div className='text-center'>
                <h2 className='text-3xl font-bold mb-7 '>ADDED YOUR PRODUCT HERE</h2>
            </div>

            <form>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form4Example1">NAME</label>
                    <input type="text" name='name' id="form4Example1" className="form-control outline outline-stone-500 border" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form4Example1">PRICE</label>
                    <input type="number" name='price' id="form4Example1" className="form-control outline outline-stone-500 border" />
                </div>
                
                <div className="form-outline mb-4">
                    <label className="form-label" for="form4Example1">QUANTITY</label>
                    <input type="number" name='quantity' id="form4Example1" className="form-control outline outline-stone-500 border" />
                </div>

            
                {/* <!-- Message input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" for="form4Example3">DISCRIPTION</label>
                    <textarea className="form-control outline outline-stone-500 border" id="form4Example3" rows="4"></textarea>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form4Example1">IMAGE</label>
                    <input type="file" name='image' id="form4Example1" className="form-control outline outline-stone-500 border" />
                </div>

                <input type="submit" value='ADD PRODUCT' className="btn btn-outline w-full px-3 py-1 rounded-md hover:bg-transparent hover:text-black" />
            </form>

        </div>
    );
};

export default AddProduct;