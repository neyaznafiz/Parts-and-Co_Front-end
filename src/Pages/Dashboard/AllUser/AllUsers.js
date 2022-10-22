import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../../Components/Shared/Loading";
import auth from "../../../Firebase/firebase.init";
import DisplayAllUser from "./DisplayAllUser";

const AllUsers = () => {
  const [user, setUser] = useAuthState(auth);

  const { data, isLoading, refetch } = useQuery("users", () =>
    fetch("https://parts-and-co-server-production.up.railway.app/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `https://parts-and-co-server-production.up.railway.app/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const remaining = user?.filter(
            (userCollection) => userCollection._id !== id
          );
          setUser(remaining);
        });
    }
  };

  // console.log();

  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //     // console.log(user.email);

  //     fetch('https://parts-and-co-server-production.up.railway.app/users')
  //         .then(res => res.json())
  //         .then(data => setUsers(data))

  // }, [users])
  return (
    <div className="lg:w-full  p-20">
      <div className="">
        <table className="table">
          <thead>
            <tr>
              {/* <th>SL</th> */}
              <th className="text-xl font-bold">EMAIL</th>
              <th className="text-xl font-bold">ADMIN BUTTON</th>
              <th className="text-xl font-bold">REMOVE BUTTON</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((user) => (
              <DisplayAllUser
                key={user._id}
                user={user}
                refetch={refetch}
                handleDeleteUser={handleDeleteUser}
              ></DisplayAllUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
