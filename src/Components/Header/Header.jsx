import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import user from '../../images/client-1.png'
export default function Header() {
    return (
        <>
            {/* <!-- Topbar start --> */}

            <div className="header1 py-1 ">
                <div className="container-fluid">
                    <div className="row  py-1 px-xl-5">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="d-fle">
                                <Link className="text-body mr-3" to={'About'}>About</Link>
                                <Link className="text-body mr-3" to={'Contact'}>Contact</Link>
                                <Link className="text-body mr-3" to={'home'}>Help</Link>
                                <Link className="text-body mr-3" to={'FAQs'}>FAQs</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end text-lg-right">


                            <div className="dropdown ">
                                <button className="bg-white  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Account
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item" to={"signup"} >signup </Link> </li>
                                    <li><Link className="dropdown-item" to={"login"}> login</Link></li>
                                    <li><Link className="dropdown-item" to={"logout"}> logout</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Topbar end --> */}


            {/* <!-- Navbar startx` --> */}


            <div className=' container-fluid bg-white   py-4  '>
                <div className='row '>

                    <div className="col-md-4 text-center">
                        <Link className="h_logo navbar-brand " to={'home'}>
                            <span className="h1 text-uppercase text_logo bg-dark px-2">Multi</span>
                            <span className="h1 text-uppercase text-dark bg_logo px-2 ml-n1">Shop</span>
                        </Link>
                    </div>

                    <div className="col-md-4  my-lg-0 my-md-5 my-sm-5">
                        <div className="h_serch m-auto w-75">
                            <div className="input-group mb-3 text-center">
                                <input type="text" className="form-control" placeholder="Search for products" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="sr_style text_logo" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-lg-end text-sm-center  text-md-center   ">
                        <div className="h_cs  ">
                            <img src={user} className=' user me-2 ' alt="" />
                            <p className='fw-bold mb-0 '>Essam Ali</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-secondary navbar-expand-lg  mb-4">
                <div className="container-fluid m-0  ">


                    <div className="dropdown ">
                        <button className=" dropdown-toggle dropdown_style" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='dropdown_style d-flex align-items-center  justify-content-between  container  py-3 '>
                                <h6 className="text-dark m-0 pe-5 me-5 fw-bold"><i className="fa fa-bars mr-2"></i>Categories</h6>
                                <i className="fa fa-angle-down text-dark ps-5 me-3  "></i>
                            </div>
                        </button>
                        <ul className="dropdown-menu menu_style" aria-labelledby="dropdownMenuButton1">




                            <li> <Link className="dropdown-item dropdown-toggle menu_item py-2 fw-bold " to={"Dresses"}>Dresses </Link></li>



                            <li><Link className="dropdown-item dropdown-toggle menu_item py-2 fw-bold " to={"Shirts"}>Shirts</Link></li>

                            <li><Link className="dropdown-item dropdown-toggle menu_item py-2 fw-bold " to={"Jeans"}>Jeans</Link></li>

                            <li><Link className="dropdown-item dropdown-toggle menu_item py-2 fw-bold " to={"Swimwear"}>Swimwear</Link></li>

                            <li><Link className="dropdown-item dropdown-toggle menu_item py-2 fw-bold " to={"Sportswear"}>Sportswear</Link></li>

                            <li><Link className="dropdown-item dropdown-toggle menu_item py-2 fw-bold " to={"Blazers"}>Blazers</Link></li>

                            <li><Link className="dropdown-item dropdown-toggle fw-bold   py-2" data-bs-toggle="dropdown" to={"Shoes"}>Shoes</Link></li>



                        </ul>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
<<<<<<< HEAD
=======
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className='nav-link active text-white' to="login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active text-white' to="register">register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active text-white' to="products">Shop</Link>
                            </li>
>>>>>>> 33eb0ad51a8fe67cd6b79bfc4c9c2b3e833627e3

                    <div className="collapse    navbar-collapse" id="navbarSupportedContent">

                        <div className="navbar-nav m-auto py-0">
                            <Link to={"home"} className="nav-item nav-link active fs-5 fw-bold px-3">Home</Link>
                            <Link to={"shop"} className="nav-item nav-link fs-5 fw-bold px-3">Shop</Link>
                            <Link to={"shopeDetails"} className="nav-item nav-link fs-5 fw-bold px-3">Shop Detail</Link>
                            <div className="dropdown collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle px-3 fs-5 fw-bold " to={"Pages"} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages <i className="fa-solid fa-caret-down"></i>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-dark bg_logo text-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><Link className="dropdown-item text-dark" to={"Cart"}>Shopping Cart</Link></li>
                                            <li><Link className="dropdown-item text-dark" to={"Checkout"}>Checkout</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <Link to={"Contact"} className="nav-item nav-link fs-5 fw-bold px-3">Contact</Link>
                        </div>

                    </div>
                    <div>
                   <span  className='fs-5 me-2'> <i className="fas fa-heart   text_logo"></i> <span className='text-white'>0</span></span>
                   <span  className='fs-5 me-5'> <i className="fas fa-shopping-cart text_logo "></i> <span className='text-white'>0</span></span>
                    </div>
                </div>
            </nav>




            {/* <!-- Navbar End --> */}
        </>
    )
}
