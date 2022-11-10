import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    return (
        <div className='shadow-xl mt-6'>
            <div className="card w-96 bg-base-100 h-96  rounded ">
                <PhotoProvider>
                    <PhotoView src={service.img}>
                        <figure><img className='h-36 w-96' src={service.img} alt="service" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">
                        {service.name}
                        <div className="badge badge-secondary">{service.rating}</div>
                    </h2>
                    <p>{service.shortDescription}</p>
                    <p className='text-xl'>Price: $ <span className='text-3xl font-bold'>{service.price}</span></p>
                    <div className='grid justify-items-end pb-2 pr-2'>
                        <Link to={`/services/${service.ids}`}><button className="btn btn-outline border-none">Details <BsFillArrowRightCircleFill className='mr-4 ml-2' /></button>  </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;