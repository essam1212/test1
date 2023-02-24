import './cart.css'
import cat from "../../images/cat-2.jpg"
import { useState } from 'react'
const Cart = () => {
    let [data, setData] = useState(1)

    let increaseValue = () => {
        let inc = data++
        setData(inc+1)

    }
    let decreaseValue = () => {
        let dec = data--
        setData(dec-1)
    
        
    }
    return (
        <div className='cart'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr className=' fs-5'>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">


                                <tr>
                                    <td className="align-middle fw-bold "><img src={cat} alt=""  /> Product Name</td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle">
                                        <div className="input-group cr_inpute_style mx-auto" >
                                            <div className="input-group-btn">
                                                <button onClick={decreaseValue} disabled={data==1}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm text-center" value={data} />
                                            <div className="input-group-btn">
                                                <button onClick={increaseValue} >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="col-md-4 cr_inpute_style ">
                    <form className="mb-30" action="">
                    <div className="input-group">
                        <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code"/>
                        <div className="input-group-append">
                            <button className="">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <h5 className=" text-center text-uppercase mb-3 fs-4"><span className="  pr-3">Cart Summary</span></h5>
                <div className="bg-light p-30 mb-5">
                    <div className="border-bottom pb-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h6 className='fs-5'>Subtotal</h6>
                            <h6>$150</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium fs-5">Shipping</h6>
                            <h6 className="font-weight-medium">$10</h6>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>$160</h5>
                        </div>
                        <button className=" border rounded-pill w-100 fs-5 my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cart