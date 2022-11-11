import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceHome = ({ homeservice }) => {


    return (

        <div className='shadow-2xl rounded-lg'>
            <div className="card w-96 bg-base-100 h-96 rounded m-6">
                <PhotoProvider>
                    <PhotoView src={homeservice.img}>
                        <figure><img className='h-36 w-96' src={homeservice.img} alt="service" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">
                        {homeservice.name}
                        <div className="badge badge-secondary">{homeservice.rating}</div>
                    </h2>
                    <p>{homeservice.shortDescription}</p>
                </div>
                <div className='grid justify-items-end pb-2 pr-2'>
                    <Link to={`/services/${homeservice.ids}`}> <button on className="btn btn-outline border-none">Details <BsFillArrowRightCircleFill className='mr-4 ml-2' /></button></Link>

                </div>
            </div>
        </div>

    );
};

export default ServiceHome;