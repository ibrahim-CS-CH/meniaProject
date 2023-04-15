import React from 'react'

const AboutUS = () => {
  return (
    <div className="about" id="aboutus">
        <div className="container">
            <div className="heading">
                <h1>About Us</h1>
            </div>
            <div className="sec">
                <div className="r-sec">
                    <h1>Monkeypox Diagnosis <br/>  (MPXV)
                    </h1>
                    <p className="monkey">
                        Monkeypox is an illness caused by the monkeypox virus. It can also spread from humans to other
                        humans through close contact with someone who has a monkeypox rash. Close contact can mean being
                        face-to-face .
                    </p>
                    {/* <p className="read">Read More</p> */}
                </div>
                <div className="l-sec">
                    <img src="/p4.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUS