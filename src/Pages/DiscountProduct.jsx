import React from 'react'
import '../Styles/DiscountProduct.css'
import { Link } from 'react-router-dom'
import Product_1 from "../images/product-1.jpg"
import Product_2 from "../images/product-2.jpg"
import Product_3 from "../images/product-3.jpg"
import Product_4 from "../images/product-4.jpg"
import Product_5 from "../images/product-5.jpg"
import Product_6 from "../images/product-6.jpg"
import Product_7 from "../images/product-7.jpg"
import Product_8 from "../images/product-8.jpg"
export default function DiscountProduct() {
    return (
        <>
            <h2 className='mb-5 fs-1 text-center'> DISCOUNT PRODUCTS </h2>
            <div className='container-fluid '>
                <div className="row">
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_1} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_2} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_3} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_4} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_5} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_6} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_7} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <Link to="productdetails">
                            <div className='DS_cart_product'>
                                <img src={Product_8} className="w-100" alt="" />
                                <div className='text-center DS_overly_discount '>
                                    <p className=''>Sale</p>
                                </div>
                                <div className='text-center DS_overly '>
                                    <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                    <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                                </div>
                                <div className='text-center bg-white w-100'>
                                    <h2>Name product</h2>
                                    <h3>price Before</h3>
                                    <h4 className=' text-secondary'>Price after</h4>
                                    <span><i className="fa-solid fa-star text-warning" /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
