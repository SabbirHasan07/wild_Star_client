import React, { useContext} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Swal from 'sweetalert2'

import { BsStarFill } from 'react-icons/bs';
import { AuthContex } from '../Contex/AuthProvider';
import Review from '../Review/Review';

const Details = () => {
    const { user } = useContext(AuthContex);
    const selectedData = useLoaderData();
    const course = selectedData.selectedCourses;
    const reviewsALL = selectedData.selectAllreview;
   
    

    const updateComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.comment.value;
        const name = user.displayName;
        const photoURL = user.photoURL;
        const email = user.email;
        const uid = user.uid;
        const ids = course.ids;
        const serviceName = course.name;
        
        console.log(text);
        const reviewadd = {
            text,
            name,
            photoURL,
            email,
            ids,
            uid,
            serviceName

        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewadd)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    Swal.fire(
                        'Good job!',
                        'Your review add successfully and "Refresh the Page"."!',
                        'success'
                    )
                }
            })



    }

    return (
        <div className='flex ml-2 mt-2'>
            <div className='m-2'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    

                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">SERVICE</h2>
                        <h2 className="card-title">{course.name}</h2>
                        <p>{course.Details}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-secondary">{course.rating} <BsStarFill className='ml-1' /></div>
                        </div>
                    </div>
                    <PhotoProvider>
                        <PhotoView src={course.img}>
                            <figure><img className='h-36 w-96' src={course.img} alt="service" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                </div>

            </div>
            <div className='flex gap-2 m-2 shadow-xl'>
                <div>
                    <h1 className='mb-6 text-center text-3xl font-bold mt-2'>Reviews</h1>
                    <h1 className='p-4 text-red-500'>*To show your comment please refresh the page.</h1>
                    <div className="card w-96 bg-base-100 shadow-xl m-2 gap-2 ">
                        {
                            reviewsALL.map(rw=><Review
                            key={rw._id}
                            rw={rw}
                            ></Review>)
                        }

                   
                    </div>

                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">

                        <form onSubmit={updateComment} className="card-body">
                            <h1 className=' mb-6 text-center text-3xl font-bold mt-2'>"Submit Your Review"</h1>
                            <textarea className="textarea textarea-bordered" placeholder="Type your review" name='comment'></textarea>
                            <div className="card-actions justify-end">
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                            <button className=''>Send</button>

                                               

                                            </>
                                            :
                                            <><Link className='' to='/login'>Send</Link></>
                                            

                                    }
                                </>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;