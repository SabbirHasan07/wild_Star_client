import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services/")
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 m-6'>
            {
                services.map(service =><Service
                key = {service.id}
                service = {service}
                ></Service> )
            }
           
        </div>
    );
};

export default Services;