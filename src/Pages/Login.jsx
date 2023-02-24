import React from 'react'
import '../Styles/Login.css'

export default function Login() {
    return (
        <>
            <div className=' container LG_form  text-center'>
                <form action="">
                    <h1 className='mb-5 mt-5  text-warning'> Sign In</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 ">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="Email" placeholder='Email' />
                                <label htmlFor="Email">Email address</label>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 ">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="Password" placeholder='Password' />
                                <label htmlFor="Password">Password</label>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 ">
                            <button type="submit" className="btn btn-primary p-3 w-100">Login</button>
                        </div>
                        <div className="col-sm-12 col-md-12 mt-3">
                            <button type="submit" className="btn btn-danger p-3 w-100"> Login By Gmail</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
