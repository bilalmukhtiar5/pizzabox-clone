import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import logo from '../assets/images/logo.jpg'; // Adjust the path as necessary
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import '../components/PreNavbar.css'

const PreNavbar = () => {
    return (
        <section>
            <div className='container d-flex mt-2'>
                <div className='ms-5'>
                    <img src={logo} alt="" style={{ width: '60px', height: '60px' }} />
                </div>

                {/* yahan flex-column kar diya */}
                <div className='d-flex flex-column justify-content-center ms-4'>

                    <div className='d-flex align-items-center'>
                        <IoLocationSharp className='fs-5' />
                        <p className='fw-bold mb-0'>Deliver to</p>
                        <IoMdArrowDropdown className='ms-1 fs-5' />
                    </div>
                    {/* ab yeh neeche aa jayega */}
                    <span><input type="text" className='mt-1 ms-3 border-0 shadow-none d-inline'/></span>
                
                </div>

                <div className='d-flex justify-content-start ms-auto align-items-center gap-3 me-5'>
                    <div className='border mt-2 bg-danger p-1 rounded'>
                        <FaShoppingBag className='fs-4' color='white' />
                    </div>
                    <div>
                        <button id='register-btn' className='btn btn-primary'>Sign In / Register </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PreNavbar