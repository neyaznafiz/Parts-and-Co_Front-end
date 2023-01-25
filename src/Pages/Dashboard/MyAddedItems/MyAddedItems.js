import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import DisplayMyAddedItems from "./DisplayMyAddedItems";
const axios = require("axios");

const MyAddedItems = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const myAddedItems = async () => {
      const email = user.email;
      const url = `https://pac-server.vercel.app/myaddeditems?email=${email}`;

      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProduct(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    myAddedItems();
  }, [user]);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `https://pac-server.vercel.app/myproduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = product.filter(
            (InventoryItems) => InventoryItems._id !== id
          );
          setProduct(remaining);
        });
    }
  };

  return (
    <div className="lg:px-20">
      <h1 className="text-center pb-2 mx-auto text-4xl mb-5 font-bold border-b-2 border-zinc-600 lg:w-6/12">
        MY ADDED PRODUCTS - {product.length}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-10 px-10">
        {product.map((product) => (
          <DisplayMyAddedItems
            key={product._id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          ></DisplayMyAddedItems>
        ))}
      </div>
    </div>
  );
};

export default MyAddedItems;
