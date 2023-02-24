import React from 'react'
import '../Styles/Products.css'
import { Link } from 'react-router-dom';
import Product_1 from "../images/product-1.jpg"
import Product_2 from "../images/product-2.jpg"
import Product_3 from "../images/product-3.jpg"
import Product_4 from "../images/product-4.jpg"
import Product_5 from "../images/product-5.jpg"
import Product_6 from "../images/product-6.jpg"
import Product_7 from "../images/product-7.jpg"
import Product_8 from "../images/product-8.jpg"

export default function Products() {
    return (
        <>
            
            <div className='container-fluid '>
                <div className="row">
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_1} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_2} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_3} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_4} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_5} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_6} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_7} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_8} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_1} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_2} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_3} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_4} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_5} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_6} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_7} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  mb-5  ">
                        <div className='PR_cart_product'>
                            <img src={Product_8} className="w-100" alt="" />
                            <div className='text-center PR_overly '>
                                <i className="fa-solid fa-cart-shopping me-3 btn btn-outline-primary fs-1 " />
                                <i className="fa-regular fa-heart btn btn-outline-danger fs-1" />
                            </div>
                            <div className='text-center bg-white w-100'>
                                <h2><Link to="productdetails">Name product</Link></h2>
                                <h3>price </h3>
                                <span><i className="fa-solid fa-star text-warning" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
