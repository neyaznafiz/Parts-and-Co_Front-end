import React from 'react';
import { toast } from 'react-toastify';

const DisplayAllUser = ({ user, refetch }) => {

    const { email, role } = user

    const makeAdmin = () => {

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Successfully made a admin')
            })
    }

    return (

        <tr>
            {/* <td>{parseInt(index + 1)}</td> */}
            <td className='text-lg font-semibold'>{email}</td>
            <td>
                {role === 'admin' ? <p className='text-lg uppercase'>Alreay Admin</p>
                    :
                    <button onClick={makeAdmin} className="border px-3 py-1 rounded-md hover:bg-white hover:text-black"> MAKE ADMIN</button>
                }
            </td>
            <td>
                <input type="submit" value='REMOVE USER' className="border px-3 py-1 rounded-md hover:bg-white hover:text-black" />
            </td>
        </tr>

    );
};

export default DisplayAllUser;