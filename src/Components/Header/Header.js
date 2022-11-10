import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../wild_images/Untitled-removebg-preview (2).png';
import { AuthContex } from '../Contex/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContex);
    const handlelogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100 mr-6 first:p-6 shadow-xl  ">
            <div className="flex-1">
                <img className='w-1/12' src={logo} alt=''></img>
                <Link to="/" className="btn btn-ghost normal-case text-4xl font-bold">Wild Star</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 gap-6">
                    <li><Link to="/home" className='text-2xl font-bold'>Home</Link></li>
                    <li><Link to="/blog" className='text-2xl font-bold'>Blog</Link></li>
                    <li><Link to="/team" className='text-2xl font-bold'>Team</Link></li>
                    <>
                        {
                            user?.uid ?
                                <>
                                
                                <Link to='/ownreview' className='menu menu-horizontal p-0 gap-6 text-2xl font-bold mt-3 text-blue-700'>My Review</Link>
                                <Link to='/addservice' className='menu menu-horizontal p-0 gap-6 text-2xl font-bold mt-3 text-blue-700'>Add Service</Link>
                                <Link className='menu menu-horizontal p-0 gap-6'><button className='text-2xl font-bold'  onClick={handlelogOut}>Log Out</button></Link>
                                </>
                                :
                                <><Link className='menu menu-horizontal p-0 gap-6 text-2xl font-bold mt-3' to='/login'>Login</Link></>
                    }
                    </>



                </ul>
            </div>
        </div>

    );
};

export default Header;