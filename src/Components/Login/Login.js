import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { AuthContex } from '../Contex/AuthProvider';
import useTitle from '../hook/useTitle';

const Login = () => {
    useTitle("login");
    const { loginProvider, logIn ,setLoading} = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error,setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const googlePopup = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
               
                if (user.uid) {
                    navigate(from, { replace: true });

                }
                else {
                   
                   

                }
            })
            .catch(err => console.error(err));
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email,password)
        .then(result =>{
            const user = result.user;
           
            setError('');
            if (user.uid) {
                navigate(from, { replace: true });

            }
            else {
               
               

            }
            form.reset();
        })
        .catch(err=>{
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        })
        

    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>New here?  please, <Link to='/signup' className='text-2xl font-bold text-green-800'>Sign Up</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='grid justify-center'><button onClick={googlePopup}><FcGoogle className='text-3xl' /></button></div>
                            <p className='text-red-700'>{error}</p>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;