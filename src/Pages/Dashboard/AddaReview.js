import React from 'react';

const AddaReview = () => {
    return (
        <div>
            <div className='mb-5 text-center text-2xl font-bold'>
            <h2>WELCOME TO REVIEW SECTION</h2>
            </div>
            <div class="form-control bg-transparent border-0 lg:w-[500px]">
                <label class="label">

                    <span class="label-text text-xl">TYPE YOUR REVIEW</span>
                    
                </label>
                <textarea type='text' name='review' class="textarea textarea-bordered h-24 bg-transparent " ></textarea>
                <label class="label">

                <input type="submit" value='SUBMIT' className="btn btn-outline w-full px-3 py-1 rounded-md hover:bg-transparent hover:text-black" />
                    
                </label>
            </div>
        </div>
    );
};

export default AddaReview;