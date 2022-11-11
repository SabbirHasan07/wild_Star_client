import React from 'react';
import { Link } from 'react-router-dom';


const Userprofile = ({ pr, profile, setProfile }) => {
    const handleDelete = (id) => {
        fetch(`https://wild-star-server.vercel.app/review/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const rem = profile.filter(pro => pro._id !== id);
                    const newPro = [...rem];
                    setProfile(newPro);
                }
            })
    }

    return (
        <div className='m-6 '>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={pr.photoURL} alt="reviews" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold'>Sercive: {pr.serviceName}</h1>
                    <h1 className='text-2xl font-bold'>ID: {pr.ids}</h1>
                    <h2 className="card-title">Name: {pr.name}</h2>
                    <p className='text-xl'> Comment: {pr.text}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(pr._id)} className="btn btn-primary">Delete</button>
                        <Link to={`/update/${pr._id}`} className="btn btn-primary">update</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;