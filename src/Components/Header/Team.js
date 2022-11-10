import React from 'react';
import admin from '../../wild_images/admin.jpg';
import { MdAdminPanelSettings } from 'react-icons/md';
import {BsFillArrowRightCircleFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

const Team = () => {
    const contact = ()=>{
        Swal.fire({
            title: '<strong>Email:</strong>',
            icon: 'info',
            html:
              
              '<a href="">sabbirhasanleom10@gmail.com</a> ',
            
          
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            
          })

    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-9">
                <figure><img className='w-72' src={admin} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Author/Admin</h2>
                    <p className='text-xl'>(Development Section)</p>
                    <p className='text-6xl font-bold ml-9'><MdAdminPanelSettings/></p>
                    <div className='grid justify-items-end pb-2 pr-2'>
                        <button onClick={contact} className="btn btn-outline border-none">Contact<BsFillArrowRightCircleFill className='mr-4 ml-2'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;