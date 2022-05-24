import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import DisplayAllUser from './DisplayAllUser';

const AllUsers = () => {

    // const { data: users } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
    // console.log();

    const [user, setUser] = useState([])
    useEffect(() => {
        // console.log(user.email);

        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))

    }, [user])
    return (
        <div className='w-full  p-20'>
            <div class="">
                <table class="table">
                    {/* <!-- head --> */}
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
                            user.map((user, index) => <DisplayAllUser
                                key={user._id}
                                user={user}
                                index={index}
                            ></DisplayAllUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;
