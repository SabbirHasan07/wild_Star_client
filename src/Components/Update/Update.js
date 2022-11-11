import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const router = useParams();
    const { id } = router;
    const [text, setText] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/update/${id}`)
            .then(res => res.json())
            .then(data => setText(data))
    }, [id])

    const handleUpdate = (event) => {
        event.preventDefault();
        const newText = event.target.text.value;
        const updated = {
            text:newText
        }
        fetch(`https://wild-star-server.vercel.app/update/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
                navigate('/ownreview');
            })
    }
    return (
        <div className='m-6'>
            <form onSubmit={handleUpdate}>
                <textarea name='text' defaultValue={text.text} className="textarea bg-slate-600 text-white" placeholder="Bio"></textarea>
                <input className='m-6 btn btn-outline' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;