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
        <div className="navbar bg-base-100 lg:mr-6 lg:first:p-6 shadow-xl  ">
            <div className="lg:flex-1">
                <img className='w-1/12 ' src={logo} alt=''></img>
                <Link to="/" className="btn btn-ghost normal-case lg:text-4xl lg:font-bold">Wild Star</Link>
            </div>
            <div className="lg:flex-none">
                <ul className="menu menu-horizontal p-0 lg:gap-6">
                    <li><Link to="/home" className='lg:text-2xl lg:font-bold'>Home</Link></li>
                    <li><Link to="/blog" className='lg:text-2xl lg:font-bold'>Blog</Link></li>
                    <li><Link to="/team" className='lg:text-2xl lg:font-bold'>Team</Link></li>
                    <>
                        {
                            user?.uid ?
                                <>
                                
                                <Link to='/ownreview' className='menu menu-horizontal p-0 lg:gap-6 lg:text-2xl lg:font-bold lg:mt-3 text-blue-700'>My Review</Link>
                                <Link to='/addservice' className='menu menu-horizontal p-0 lg:gap-6 lg:text-2xl lg:font-bold lg:mt-3 text-blue-700'>Add Service</Link>
                                <Link className='menu menu-horizontal p-0 gap-6'><button className='lg:text-2xl lg:font-bold'  onClick={handlelogOut}>Log Out</button></Link>
                                </>
                                :
                                <><Link className='menu menu-horizontal p-0 lg:gap-6 lg:text-2xl lg:font-bold lg:mt-3' to='/login'>Login</Link></>
                    }
                    </>



                </ul>
            </div>
        </div>

    );
};

export default Header;