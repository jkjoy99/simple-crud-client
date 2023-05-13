import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState (loadedUsers);
    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully', { position: 'top-center' })
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>
                        {user.name} : {user.email} :
                        {user._id}
                        <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>x</button>
                    </p>)
                }
                 <ToastContainer />
            </div>
        </div>
    );
};

export default users;