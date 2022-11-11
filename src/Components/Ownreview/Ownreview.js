import React, {  useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Contex/AuthProvider';
import Userprofile from '../userPfofile/Userprofile';


const Ownreview = () => {
    const {user} = useContext(AuthContex);
    const [profile,setProfile]= useState([]);
    console.log(user.email);
    useEffect(()=>{
        fetch(`https://wild-star-server.vercel.app/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setProfile(data))
        .catch(err=>console.log(err))
    },[user?.email])

    return (
       <div className='lg:grid lg:grid-cols-3 p-6'>
        {
            profile.map(pr=><Userprofile
            key={pr._id}
            pr = {pr}
            profile={profile}
            setProfile={setProfile}
            ></Userprofile> )
        }
      
       </div>
    );
};

export default Ownreview;