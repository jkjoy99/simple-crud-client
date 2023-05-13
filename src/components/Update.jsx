import React from 'react';
import { useLoaderData } from 'react-router-dom';import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate =event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};
        console.log(updatedUser);
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"},
                body: JSON.stringify(updatedUser),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                toast.success('users updated successfully',{position: 'top-center'})
            }
        })
    }
    return (
        <div>
            <h1>Update information of {loadedUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Update;