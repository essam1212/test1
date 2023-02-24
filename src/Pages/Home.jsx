import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import '../Styles/Home.css'
import photo_1 from "../images/carousel-1.jpg"
import photo_2 from "../images/carousel-2.jpg"
import photo_3 from "../images/carousel-3.jpg"
import photo_offer1 from "../images/offer-1.jpg"
import photo_offer2 from "../images/offer-2.jpg"
import Categories from './Categories'
import FeaturedProducts from './FeaturedProducts'
import DiscountProduct from './DiscountProduct'
import Aos from 'aos'
export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* slider product offers */}
                    <div className="col-md-8 mb-2 mt-2" data-aos="fade-right">
                        <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" >
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={photo_1} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={photo_2} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={photo_3} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    {/* offers and ADS */}
                    <div className="col-md-4 " data-aos="fade-left">
                        <div className="HM_product_offer pt-2">
                            <img className='HM_img_fluid w-100 ' src={photo_offer1} alt="" />
                            <div className="HM_offer_text mt-2">
                                <h6 className='text-white'>20%</h6>
                                <h3 className='text-white'>head offer</h3>
                                <button className='btn btn-warning'>Shop</button>
                            </div>
                        </div>
                        <div className="HM_product_offer pt-2">
                            <img className='HM_img_fluid w-100 ' src={photo_offer2} alt="" />
                            <div className="HM_offer_text mt-2">
                                <h6 className='text-white'>20%</h6>
                                <h3 className='text-white'>head offer</h3>
                                <button className='btn btn-warning'>Shop</button>
                            </div>
                        </div>
                    </div>
                    {/* serves site */}
                    <div className="col-sm-12 col-md-12  mt-5  " data-aos="fade-down">
                        <div className='container-fluid '>
                            <div className="row">
                                <div className='col-sm-12 col-md-3  HM_serves'>
                                    <i className="fa-solid fa-check me-3 text-warning" />
                                    <p>Quality Product</p>
                                </div>
                                <div className='col-sm-12 col-md-3 HM_serves'>
                                    <i className="fa-solid fa-truck-fast me-3 text-warning" />
                                    <p>Free Shipping</p>
                                </div>
                                <div className='col-sm-12 col-md-3 HM_serves'>
                                    <i className="fa-solid fa-right-left me-3 text-warning" />
                                    <p>14-Day Return</p>
                                </div>
                                <div className='col-sm-12 col-md-3 HM_serves'>
                                    <i className="fa-solid fa-headset me-3 text-warning" />
                                    <p>24/7 Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section category */}
                    <div className="col-sm-12 col-md-12  mt-5 " data-aos="zoom-out">
                        <Categories />
                    </div>
                    {/* section  FeaturedProducts*/}
                    <div className="col-sm-12 col-md-12  mt-5 " data-aos="zoom-in">
                        <FeaturedProducts />
                    </div>
                    {/* section ads and offers */}
                    <div className="col-sm-12 col-md-6 " data-aos="flip-right">
                        <div className="HM_product_offer pt-2">
                            <img className='HM_img_fluid w-100 ' src={photo_offer1} alt="" />
                            <div className="HM_offer_text mt-2">
                                <h6 className='text-white'>20%</h6>
                                <h3 className='text-white'>head offer</h3>
                                <button className='btn btn-warning'>Shop</button>
                            </div>
                        </div>
                    </div>
                    {/* section ads and offers */}
                    <div className="col-sm-12 col-md-6 " data-aos="flip-left">
                        <div className="HM_product_offer pt-2">
                            <img className='HM_img_fluid w-100 ' src={photo_offer1} alt="" />
                            <div className="HM_offer_text mt-2">
                                <h6 className='text-white'>20%</h6>
                                <h3 className='text-white'>head offer</h3>
                                <button className='btn btn-warning'>Shop</button>
                            </div>
                        </div>
                    </div>
                    {/* discount products  */}
                    <div className="col-sm-12 col-md-12  mt-5  " data-aos="zoom-in">
                        <DiscountProduct />
                    </div>
                </div>
            </div>

        </>
    )
}
