import React, { useEffect, useState } from 'react';
import useTitle from '../hook/useTitle';
import Service from '../service/Service';

const Services = () => {
    useTitle("services");

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("https://wild-star-server.vercel.app/services/")
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='lg:grid lg:grid-cols-3 gap-4 m-6'>
            
           
        </div>
    );
};

export default Services;