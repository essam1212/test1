import { useRef } from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
         <div className="container-fluid">
        <h2 className=" text-uppercase text-center mx-xl-5 mb-4"><span >Contact Us</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Your Name"
                                required="required" data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject"
                                required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="8" id="message" placeholder="Message"
                                required="required"
                                data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className=" py-2 px-4 border rounded-pill" type="submit" id="sendMessageButton">
                                Send  Message</button>
                               
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <div className="bg-light p-30 mb-30">
                <iframe className='w-100'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.39964806268!2d31.119602871771033!3d30.016769756547333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2sGiza%2C%20El%20Omraniya%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1676833947004!5m2!1sen!2seg"  height="420" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="bg-light p-30 mb-3">
                    <p className="mb-2"><i className="fa fa-map-marker-alt  mr-3"></i>haram Street, giza, Egypt</p>
                    <p className="mb-2"><i className="fa fa-envelope  mr-3"></i>essam@ali2000@gmail.com</p>
                    <p className="mb-2"><i className="fa fa-phone-alt  mr-3"></i>+01098820877</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact