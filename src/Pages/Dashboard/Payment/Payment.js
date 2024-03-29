import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gDbJT4xjXTU74z66wNjkphxp6HCRQGImcS5i8j0Jko2BGa7ePawEKH8M1jWNXs6zW0XC9RMikXsHHteZoUs2k0048prUI1F"
);

const Payment = () => {
  const { Id } = useParams();

  const url = `https://pac-server.vercel.app/payment/${Id}`;

  const { data: product, isLoading } = useQuery(["payment", Id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  // console.log(data);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-full">
      <div className="hero w-full">
        <div className="grid gap-y-5 mx-2">
          <div className="card shadow-2xl bg-transparent">
            <div className="card-body ">
              <h2 className="card-title">Please pay for : {product?.name}</h2>
              <p> Please Pay : ${product.totalPrice}</p>
              <p> Delivery Address : {product.address}</p>
            </div>
          </div>

          <div className="card lg:w-[500px] shadow-2xl bg-transparent">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm product={product} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
