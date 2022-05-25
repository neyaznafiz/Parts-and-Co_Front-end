import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Shared/Loading';
import DisplayAllUser from './DisplayAllUser';

const AllUsers = () => {

    const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    // console.log();

    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     // console.log(user.email);

    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))

    // }, [users])
    return (
        <div className='lg:w-full  p-20'>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>SL</th> */}
                            <th className='text-xl font-bold'>EMAIL</th>
                            <th className='text-xl font-bold'>ADMIN BUTTON</th>
                            <th className='text-xl font-bold'>REMOVE BUTTON</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            data?.map(user => <DisplayAllUser
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></DisplayAllUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;
