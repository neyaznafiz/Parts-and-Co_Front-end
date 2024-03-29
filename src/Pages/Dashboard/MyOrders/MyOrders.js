import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import DisplayMyOrders from "./DisplayMyOrders";

const MyOrders = () => {
  // const Id = useParams()
  // console.log(Id);
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const { _id } = orders;
    console.log(_id);

    const myaddedOrders = async () => {
      const email = user.email;

      try {
        const { data } = await axios.get(
          `https://pac-server.vercel.app/myaddedorders?email=${email}`,
          {
            headers: {
              authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    myaddedOrders();
  }, [user]);

  // cancle order
  const handleOrderCancle = (id) => {
    // console.log(id);

    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      fetch(`http://sheltered-inlet-94910.herokuapp.com/myorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter(
            (InventoryItems) => InventoryItems._id !== id
          );
          setOrders(remaining);
        });
    }
  };

  return (
    <div className="mx-6">
      <p className="text-2xl font-semibold py-5"> E-mail : {user.email}</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {[...orders].reverse().map((order) => (
          <DisplayMyOrders
            key={orders._id}
            order={order}
            handleOrderCancle={handleOrderCancle}
          ></DisplayMyOrders>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
