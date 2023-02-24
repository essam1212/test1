import React from 'react'
import '../Styles/ProductDetails.css'
import Product_1 from "../images/product-1.jpg"
import Product_2 from "../images/product-2.jpg"
import Product_3 from "../images/product-3.jpg"
import User from "../images/user.jpg"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FeaturedProducts from './FeaturedProducts';

export default function ProductDetails() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-5 mt-5">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Product_1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Product_2} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Product_3} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-5 ">
                        <div className=" bg-white p-3 h-100">
                            <h1>Product Name Goes Here</h1>
                            <span>
                                <i className="fa-solid fa-star text-warning" />
                                <i className="fa-solid fa-star text-warning" />
                                <i className="fa-solid fa-star text-warning" />
                                <i className="fa-solid fa-star text-warning" />
                            </span>
                            <h2 className='fw-bold mt-5 mb-3'>price</h2>
                            <span className=' fw-bold'>Description : </span> <p className='d-inline  mb-5'>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
                            <div className='mt-5'>
                                <span className='me-5 fw-bold'>Size : </span>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="XS" />
                                <label className='me-3' htmlFor="XS">XS</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="S" />
                                <label className='me-3' htmlFor="S">S</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="M" />
                                <label className='me-3' htmlFor="M">M</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="L" />
                                <label className='me-3' htmlFor="L">L</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="XL" />
                                <label className='me-3' htmlFor="XL">XL</label>
                            </div>
                            <div className='mt-3 mb-5'>
                                <span className='me-5 fw-bold'>Color : </span>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="red" />
                                <label className='me-3' htmlFor="red">Red</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="white" />
                                <label className='me-3' htmlFor="white">White</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="black" />
                                <label className='me-3' htmlFor="black">Black</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="blue" />
                                <label className='me-3' htmlFor="blue">Blue</label>
                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="green" />
                                <label className='me-3' htmlFor="green">Green</label>
                            </div>
                            <div class="d-flex align-items-center mt-3 mb-4 pt-2 ">
                                <div class="input-group quantity mr-3 " >
                                    <div class="input-group-btn">
                                        <button class="btn btn-warning btn-minus">
                                            <i class="fa fa-minus" />
                                        </button>
                                    </div>
                                    <input type="text" class="form-control border-1 text-center " value="1" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-warning btn-plus">
                                            <i class="fa fa-plus" />
                                        </button>
                                    </div>
                                </div>
                                <button class="btn btn-warning  ms-3"><i class="fa fa-shopping-cart mr-1" /> Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 mt-5 ">
                        <div className=" bg-white p-3 ">
                            <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="Description" title="Description">
                                    <p>
                                        Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
                                        Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
                                    </p>
                                </Tab>
                                <Tab eventKey="Reviews (0)" title="Reviews (1)">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">
                                                <h3>1 review for "Product Name"</h3>
                                                <div className='d-flex'>
                                                    <img className='me-3 ' src={User} alt="" />
                                                    <div>
                                                        <h4 className='d-inline me-2'>user Name</h4><span className=' text-secondary'>1-jun-2025</span>
                                                        <div>
                                                            <i className="fas fa-star text-warning" />
                                                            <i className="fas fa-star text-warning" />
                                                            <i className="fas fa-star text-warning" />
                                                            <i className="fas fa-star text-warning" />
                                                        </div>
                                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="write review  (0)" title="write review ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">
                                                <h3 className='fw-bold'>Leave a review</h3>
                                                <span className=' text-secondary'>Your email address will not be published. Required fields are marked *</span>
                                                <div className='mt-3'>
                                                    <span className='fw-bold'>Your Rating : </span>
                                                    <span>
                                                        <i class="fa-regular fa-star" />
                                                        <i class="fa-regular fa-star" />
                                                        <i class="fa-regular fa-star" />
                                                        <i class="fa-regular fa-star" />
                                                        <i class="fa-regular fa-star" />
                                                    </span>
                                                </div>
                                                <div className='mt-3'>
                                                    <span className='fw-bold'>Your Review  : </span>
                                                    <div className=''>
                                                        <textarea className='border border-primary' name="" id="" cols="30" rows="5" />
                                                    </div>
                                                </div>
                                                <div className='mt-2 fw-bold'>
                                                    <span>Your Name  : </span>
                                                    <div className=''>
                                                        <input className=' border border-primary' type="text" />
                                                    </div>
                                                </div>
                                                <div className='mt-2 fw-bold'>
                                                    <span>Your Email  : </span>
                                                    <div className=''>
                                                        <input className=' border border-primary' type="email" />
                                                    </div>
                                                </div>
                                                <button className=' mt-5 btn btn-warning fw-bold'>Leave Your Review</button>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 mt-5 ">
                        <FeaturedProducts />
                    </div>
                </div>
            </div>

        </>
    )
}
