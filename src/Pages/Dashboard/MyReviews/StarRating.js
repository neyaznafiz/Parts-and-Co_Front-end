import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi';
import AddaReview from '../AddaReview';

const StarRating = () => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)


    return (
        <div>
            {
                [...Array(5)].map((star, index) =>  {

                    const ratingValue = index + 1

                    return <label className=''>
                        <input type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            className='hidden' />

                        <HiStar
                            color={ratingValue > (hover || rating) ? '' : '#DAA520'}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            className='text-3xl flex cursor-pointer transition-colors'
                        />
                    </label>
                }
                )
            }
        </div>
    );
};

export default StarRating;


// {/* <div>
// {

//     [...Array(5)].map((star, index) => {

//         const ratingValue = index + 1


// //             < label className = "label" >
// //                 {/* <span className="label-text">TYPE YOUR REVIEW</span> */ }
// // <label>
// <imput type="radio" name="rating" onClick={() => setRating(ratingValue)} className="hidden"
// {...register("rating", {
//     required: {
//         value: { ratingValue },
//         message: "Rating is required",
//     },
//     minLength: {
//         value: 1,
//         message: "your yourReview  must be 40 character",
//     },
// })}
// />

// <HiStar
// color={ratingValue > (hover || rating) ? '' : '#DAA520'}
// onMouseEnter={() => setHover(ratingValue)}
// onMouseLeave={() => setHover(null)}
// className='text-3xl flex cursor-pointer transition-colors'
// />

// <label className="label">
// {errors.rating?.type === "required" && (
//     <span className="label-text-alt text-red-500">
//         {errors.rating.message}
//     </span>
// )}
// {errors.rating?.type === "minLength" && (
//     <span className="label-text-alt text-red-500">
//         {errors.yourReview.message}
//     </span>
// )}
// </label>
// {/* </label> */}

//     })
//     }
// </div> */}