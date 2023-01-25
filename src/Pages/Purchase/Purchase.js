import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";

const Purchase = () => {
  const { Id } = useParams();
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const { name, img, price, quantity, orderQuantity, description } = products;

  // const coustomerQuantityValue = getValues('coustomerQuantity')
  // console.log(coustomerQuantityValue);
  // const newPrice = coustomerQuantityValue * price

  useEffect(() => {
    if (Id) {
      const url = `https://pac-server.vercel.app/singleProduct/${Id}`;
      console.log(url);

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setProducts(data);
        });
    }
  }, [Id]);

  const handleAddToOrder = (data) => {
    const OrderProduct = {
      email: data?.email,
      name: products?.name,
      totalPrice: data?.coustomerQuantity * parseInt(price),
      orderQuantity: data?.coustomerQuantity,
      phoneNumber: data.phoneNumber,
      address: data.address,
    };

    fetch("https://pac-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(OrderProduct),
    })
      .then((res) => res.json())
      .then((addedProduct) => {
        console.log(addedProduct);
        if (addedProduct.insertedId) {
          toast.success(
            "Your order added successfully in MY OORDER. Go to Dashboard and MY ORDERS for payment. "
          );
        } else {
          toast.error("Faild to prossed order. Please try again.");
        }
      });
  };

  return (
    <div className="lg:h-screen lg:pt-16 mt-[79px]">
      {Id ? (
        <div className=" lg:flex">
          <div className="card lg:card-side shadow-2xl bg-transparent m-10 lg:w-[600px] lg:mx-auto lg:grid ">
            <figure>
              <img src={img} alt="" className="lg:w-60 h-90" />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-stone-800">{name}</h2>

              <p>{description}</p>

              {/* quantity form */}

              <div className="flex mx-auto gap-10 pt-2 text-lg">
                <p className="font-semibold text-stone-700">
                  Available Quantity: {quantity}
                </p>
                <p className="font-semibold text-stone-700">
                  Price: ${price}/pcs
                </p>
              </div>
              <p className="font-semibold text-stone-700 text-center text-xl">
                minimum order quantity: {orderQuantity}
              </p>
            </div>
          </div>

          <div className="shadow-2xl rounded-3xl mx-auto px-20 lg:w-[550px]">
            <form onSubmit={handleSubmit(handleAddToOrder)}>
              {/* email */}
              <div className="form-control w-full bg-transparent border-0">
                <label className="form-label bg-inherit">Your Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full bg-transparent text-lg"
                  value={user?.email}
                  {...register("email", {
                    required: {
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email please",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* name */}
              <div className="form-control w-full bg-transparent border-0">
                <label className="form-label">PRODUCT NAME</label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent text-lg"
                  value={name}
                  {...register("name", {
                    required: {
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/* order quantity */}
              <div className="form-control w-full bg-transparent border-0">
                <label className="form-label">
                  MINIMUM ORDER QUANTITY : {orderQuantity}
                </label>
                <input
                  type="number"
                  // onBlur={coustomerQuantityValue}
                  className="input input-bordered w-full bg-transparent text-lg"
                  {...register("coustomerQuantity", {
                    required: {
                      value: true,
                      message: "Add your quantity please",
                    },
                  })}
                />
                <label className="label">
                  {errors.CoustomerQuantity?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.CoustomerQuantity.message}
                    </span>
                  )}
                </label>
              </div>

              {/* total price */}
              {/* <div className="form-control w-full bg-transparent border-0">
                                <label className="form-label">TOTAL PRICE</label>
                                <input type="number"
                                    className="input input-bordered w-full bg-transparent text-lg"
                                    // value={newQuantity * price}
                                    {...register("totalPrice", {
                                        required: {
                                            message: 'price is reqired'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.totalPrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.totalPrice.message}</span>}
                                </label>

                            </div> */}

              {/* phone number */}
              <div className="form-control w-full bg-transparent border-0">
                <label className="form-label">PHONE NUMBER</label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent text-lg"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Phone number is reqired",
                    },
                  })}
                />
                <label className="label">
                  {errors.phoneNumber?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </label>
              </div>

              {/* address */}
              <div className="form-control w-full bg-transparent border-0">
                <label className="form-label">ADDRESS</label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent text-lg"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is reqired",
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="grid py-4 mx-auto">
                <input
                  type="submit"
                  value="ORDER"
                  className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="card lg:card-side shadow-2xl bg-transparent m-10 lg:w-[1200px] lg:mx-auto lg:grid p-10">
            <p className="text-3xl text-center uppercase">
              Please go to product page and select a product to purchage.
            </p>

            <div className="grid py-4 mx-auto">
              <Link
                to="/allproducts"
                className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black"
              >
                GO TO ALL PRODUCT{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
