import React, { useState } from 'react'
import '../Styles/Profile.css'

export default function Profile() {
    const [file, setFile] = useState("")
    return (
        <>
            <div className="container mt-5 ">
                <div className="card p-3 fw-bold">
                    <div className="d-flex flex-row justify-content-center mb-3">
                        <div className="image">
                            <img src={file ? URL.createObjectURL(file) : "https://i.imgur.com/hczKIze.jpg"} className="rounded-circle" alt="" />
                            <span>
                                <i className='bx bxs-camera-plus' />
                            </span>
                        </div>
                        <div className="d-flex flex-column ms-3 text-center mb-5">
                            <h1 className="mb-0">Client Name</h1>
                            <div className="ratings">
                                <span>4.0</span>
                                <span>
                                    <i className='fa-solid fa-star ms-1 text-warning' />
                                    <i className='fa-solid fa-star ms-1 text-warning' />
                                    <i className='fa-solid fa-star ms-1 text-warning' />
                                    <i className='fa-solid fa-star ms-1 text-warning' />
                                </span>
                            </div>
                            <span>Pro Member</span>
                            <div className="formInput">
                                <label htmlFor="file">Change Image<i className="fa-solid fa-upload icon text-primary ms-2" /></label>
                                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>
                        </div>
                    </div>
                    <h4 className='text-center fw-bold'>Your Profile</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="inputs">
                                <label>Name</label>
                                <input className="form-control" type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="inputs">
                                <label>Email</label>
                                <input className="form-control" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="inputs">
                                <label>Address</label>
                                <input className="form-control" type="text" placeholder="Address" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="inputs">
                                <label>Country</label>
                                <input className="form-control" type="text" placeholder="Country" />
                            </div>
                        </div>
                        <div className="col-md-6 m-auto text-center mt-3">
                            <div className="inputs">
                                <label>Phone</label>
                                <input className="form-control" type="number" placeholder="Phone" />
                            </div>
                        </div>
                        

                    </div>
                    <div className="mt-3 gap-2 d-flex justify-content-end">
                        <button className="px-3 btn btn-sm btn-outline-primary">Cancel</button>
                        <button className="px-3 btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
