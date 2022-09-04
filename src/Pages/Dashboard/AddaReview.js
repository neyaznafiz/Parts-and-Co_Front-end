import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import StarRating from './MyReviews/StarRating';



const AddaReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user] = useAuthState(auth)

    const handleAddReview = data => {

        const inputReview = {
            name: data.name,
            email: user.email,
            review: data.review
        }

        fetch('https://sheltered-inlet-94910.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(inputReview)
        })
            .then(res => res.json())
            .then(addedReview => {
                console.log(addedReview);
                if (addedReview.insertedId) {
                    toast.success('Your review added successfully')
                    reset()
                }
                else {
                    toast.error('Faild to add your review. Please try again.')
                }
            })
    }

    return (
        <div>


            <div className="card lg:w-[500px]  bg-base-100 shadow-xl mx-auto items-center mb-20 bg-transparent">
                <div className="card-body w-full">
                    <h2 className="text-center text-2xl font-bold pb-7">WELCOME TO REVIEW SECTION</h2>
                    <div>

                        <div className=' items-center'>

                            <form onSubmit={handleSubmit(handleAddReview)} >
                                <div className="form-control  bg-transparent border-0">
                                    <label className="label">
                                        <span className="label-text ">TYPE YOUR REVIEW</span>
                                    </label>
                                    <textarea type="text" placeholder="TYPE REVIEW" name="yourReview" className="input input-bordered lg:w-[410px] h-[200px] bg-transparent"
                                        {...register("review", {
                                            required: {
                                                value: true,
                                                message: "yourReview is required",
                                            },
                                            minLength: {
                                                value: 10,
                                                message: "your yourReview  must be 40 character",
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.yourReview?.type === "required" && (
                                            <span className="label-text-alt text-red-500">
                                                {errors.yourReview.message}
                                            </span>
                                        )}
                                        {errors.yourReview?.type === "minLength" && (
                                            <span className="label-text-alt text-red-500">
                                                {errors.yourReview.message}
                                            </span>
                                        )}
                                    </label>
                                </div>

                                <div className='flex justify-center mb-3'>
                                    <StarRating></StarRating>
                                </div>

                                <div className='grid mx-auto'>
                                    <input type="submit" value='POST REVIEW' className="btn btn-outline w-40 px-3 py-1 mx-auto rounded-md hover:bg-transparent hover:text-black" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddaReview;