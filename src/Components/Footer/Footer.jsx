import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className='FT_bg'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <div className="mt-5">
                                <h2 className=' text-warning'>GET IN TOUCH</h2>
                                <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                                <div>
                                    <i className="fa-solid fa-location-dot me-3" />
                                    <span>123 Street, New York, USA</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-envelope me-3" />
                                    <span>info@example.com</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-phone me-3" />
                                    <span>+01151262332</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="mt-5">
                                <h2 className=' text-warning'>QUICK SHOP</h2>
                                <ul>
                                    <li><Link to="home">home</Link></li>
                                    <li>shop</li>
                                    <li>shopping cart</li>
                                    <li>category</li>
                                    <li>contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="mt-5">
                                <h2 className=' text-warning'>MY ACCOUNT</h2>
                                <ul>
                                    <li><Link to="profile">Profile</Link></li>
                                    <li>liked</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="mt-5">
                                <h2 className=' text-warning'>FOLLOW US</h2>
                                <div className='mt-5'>
                                    <i className="fa-brands fa-twitter bg-warning p-3  fs-2  me-3" />
                                    <i className="fa-brands fa-facebook bg-warning p-3  fs-2  me-3" />
                                    <i className="fa-brands fa-linkedin bg-warning p-3  fs-2  me-3" />
                                    <i className="fa-brands fa-instagram bg-warning p-3  fs-2 " />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="mt-5  border-top">
                                <div className='mt-5 text-center'>
                                    <p>Copy Right 2023 </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
