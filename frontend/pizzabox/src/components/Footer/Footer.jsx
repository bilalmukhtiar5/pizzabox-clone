import React from 'react'
import logo from '../../assets/images/logo.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <section>
            <div className='footer container mt-3 mb-3'>
                <div className='row'>
                    <div className='col-2 d-flex justify-content-end'>
                        <img src={logo} alt="" style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className='col-4'>
                        <p className='fw-bold mb-1'>PIZZABOX</p>
                        <p className='mb-1'><span className='fw-bold'>Phone:</span> 2022256</p>
                        <p className='mb-1'><span className='fw-bold'>Email:</span> pizzaboxpeshawar@gmail.com</p>
                        <p className='mb-1'>
                            <span className='fw-bold'>Address:</span> Pizza Box - Shami road Garrison park Peshawar cantt, Pizza Box - Shami road Garrison park Peshawar cantt, Peshawar
                        </p>
                    </div>

                    <div className='col-4'>
                        <p><span className='fw-bold mb-1'>Our Timings:</span> 11:00 AM - 04:00 AM</p>
                        <p className='fw-bold mb-1'>Monday - Saturday</p>
                        <p className='fw-bold mb-1 text-decoration-underline'>Terms and Conditions</p>
                        <p className='fw-bold mb-1 text-decoration-underline'>Privacy Policy</p>
                        <p className='fw-bold mb-1 text-decoration-underline'>Sitemap</p>
                    </div>
                    <div className='col-2'>
                        <p className='fw-bold mb-2'>Follow Us</p>
                        <div className="d-flex gap-2">
                            <a href="#" className="text-dark fs-5"><FaFacebook /></a>
                            <a href="#" className="text-dark fs-5"><FaInstagram /></a>
                            <a href="#" className="text-dark fs-5"><FaTwitter /></a>
                            <a href="#" className="text-dark fs-5"><FaYoutube /></a>
                        </div>
                    </div>
                    <hr style={{ color: 'red' }} className='mt-3' />
                </div>


            </div>
        </section>
    )
}

export default Footer