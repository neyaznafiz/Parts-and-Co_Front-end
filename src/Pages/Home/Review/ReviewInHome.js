import React, { useEffect, useState } from "react";
import DisplayReviewHome from "./DisplayReviewHome";

const ReviewInHome = () => {
  const [reviewsHome, setReviewsHome] = useState([]);
  // console.log(reviewsHome);

  useEffect(() => {
    fetch("https://pac-server.vercel.app/allreview")
      .then((res) => res.json())
      .then((data) => setReviewsHome(data));
  }, []);

  return (
    <div className=" py-20">
      <div className=" border rounded-lg bg-transparent lg:mx-20 ">
        <p className="py-2 pl-3 text-lg font-semibold">
          HERE IS OUR COUSTOMER REVIEW
        </p>

        <div className=" px-4 py-8 border-t ">
          <div>
            {[...reviewsHome]
              .reverse()
              .slice(0, 6)
              .map((homeReview) => (
                <DisplayReviewHome
                  key={homeReview._id}
                  homeReview={homeReview}
                ></DisplayReviewHome>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInHome;
