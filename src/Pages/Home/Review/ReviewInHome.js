
import React, { useEffect, useState } from 'react';

const ReviewInHome =  () => {

    const [reviewHome, setReviewHome] = useState([])
    console.log(reviewHome);

    useEffect(() => {

        fetch('http://localhost:5000/allreview')
            .then(res => res.json())
            .then(data => setReviewHome(data))

    }, [])

    return (
        <div>
          
        </div>
    );
};

export default ReviewInHome;