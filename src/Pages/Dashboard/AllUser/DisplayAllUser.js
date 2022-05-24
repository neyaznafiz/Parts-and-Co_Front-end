import React from 'react';

const DisplayAllUser = ({ user }) => {

    const { email, index } = user

    return (

        <tr>
            {/* <td>{parseInt(index + 1)}</td> */}
            <td className='text-lg font-semibold'>{email}</td>
            <td>
                <input type="submit" value='MAKE ADMIN' className="border px-3 py-1 rounded-md hover:bg-white hover:text-black" />
            </td>
            <td>
                <input type="submit" value='REMOVE USER' className="border px-3 py-1 rounded-md hover:bg-white hover:text-black" />
            </td>
        </tr>

    );
};

export default DisplayAllUser;