
import React from 'react';
import Swal from 'sweetalert2'
import useTitle from '../hook/useTitle';

const Addservices = () => {
    useTitle("Add-Service")
    const handleService =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ids = parseInt(form.ids.value);
        const rating = parseFloat(form.rating.value);
        const price = parseFloat(form.price.value);
        const shortDescription = form.shortDescription.value;
        const Details = form.Details.value;
        const img = form.img.value;
        console.log(name,ids,rating,price,shortDescription,Details,img);
        const documents ={
            name,
            ids,
            rating,
            price,
            shortDescription,
            Details,
            img
        }
        fetch('https://wild-star-server.vercel.app/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(documents)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                form.reset();
                Swal.fire(
                    'Good job!',
                    'Your service add successfully!',
                    'success'
                  )
            }
        })

    }
    return (
        <form onSubmit={handleService} className='gap-6 m-10 p-6'>
            <div>
                <input type="text" placeholder="Name" name='name' className="input w-full max-w-xs m-6 text-white bg-slate-600" required />
                <input type="text" placeholder="ids (Intiger Value Only)" name='ids' className="input w-full max-w-xs m-6 text-white bg-slate-600" required />
                <input type="text" placeholder="Rating (Intiger Value Only)" name='rating' className="input w-full max-w-xs m-6  text-white bg-slate-600" required />
                <input type="text" placeholder="Price (Intiger Value Only)" name='price' className="input w-full max-w-xs m-6  text-white bg-slate-600" required />
                <input type="text" placeholder="shortDescription" name='shortDescription' className="input w-full max-w-xs m-6  text-white bg-slate-600" />
                <input type="text" placeholder="Details" name='Details' className="input w-full max-w-xs m-6  text-white bg-slate-600" required />
                <input type="text" placeholder="Photo Url" name='img' className="input w-full max-w-xs m-6  text-white bg-slate-600" required />
            </div>
            <div className='grid justify-items-center '>
                <button className='btn btn-outline shadow-xl' >Submit</button>
            </div>
        </form>

    );
};

export default Addservices;