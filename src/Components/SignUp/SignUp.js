import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Contex/AuthProvider';

const SignUp = () => {
    const [error,setError] = useState('');
    const {createUser ,updateProfileuser} = useContext(AuthContex);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleupdateUserprofile(name, photoURL);
        })
        .catch( e => {
            console.error(e)
            setError(e.message);
        });
    }
    const handleupdateUserprofile = (name,photoURL) =>{
        const profile ={
            displayName: name,
            photoURL: photoURL
        }
        updateProfileuser(profile)
        .then(()=>{})
        .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label> 
                                <input type="text" placeholder="User Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"  placeholder="PhotoUrl"  name='photoURL' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Already have an account?  please, <Link to='/login' className='text-2xl font-bold text-green-800'>Log In</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                              <p className='text-red-700 mt-2'>{error}</p>
                            </div>
                        </form>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;