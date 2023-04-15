import React from 'react'

const ContactUs = () => {
  return (
    <div className="contact-us" id='contactUs'>
    <div className="heading">
        <h1>Contact Us</h1>
    </div>
    <div className="container">
        <form action="">
            <div className="half">
                <div className="item">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" placeholder="Enter Your Name..." />
                </div>
                <div className="item">
                    <label htmlFor="title">Title :</label>
                    <input type="text" id="title" placeholder="Enter Your Title..." />
                </div>
            </div>
            <div className="full">
                <label htmlFor="contact">Contact :</label>
                <textarea name="" id="contact"></textarea>
            </div>
            <div className="action">
                <input type="submit" value="Submit" />
            </div>
            <div className="subscribe">
                Subscribe to our Website
            </div>
            <div className="email">
                <input type="email" id="email" className="email-1" placeholder="Enter Your Email..." />
            </div>
            <div className="icons">
                <i className="ri-linkedin-box-fill"></i>
                <i className="ri-facebook-box-fill"></i>
                <i className="ri-twitter-fill"></i>
            </div>
        </form>
    </div>
    </div>
  )
}

export default ContactUs