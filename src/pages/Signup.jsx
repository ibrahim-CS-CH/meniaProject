import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    console.log(inputs);
    //inputs have all field in your form as an oject you can handle anything from it
    const handleInputs = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs((e)=>({...e, [name]:value}));
    }
    const handleSignup = (e)=>{
        e.preventDefault();
        // before navigate your will ensure that this new user will be admin or user or doc to make him right direction 
        // we will add some validation in field to make our app better
        navigate('/home');
    }
  return (
    <div className="sign-up">
        <nav>
            <i className="ri-arrow-left-line"></i>
            <Link to={'/'}>
                <img src="logo.png" alt="Logo"/>
            </Link>
            <p>MPXV</p>
        </nav>
        <div className="log-text">
            <h1>Create Account</h1>
        </div>
        <div className="container">
            <div className="col-1 cols">
                <label htmlFor="f-name">First Name</label>
                <div className="input-field">
                    <input type="text" name='First Name' id="f-name" placeholder="First Name" onChange={handleInputs} required/>
                    <i className="ri-user-line email-icon"></i>
                </div>
                <label htmlFor="e-address">Email Address</label>
                <div className="input-field">
                    <input type="email"name='email' onChange={handleInputs} id="e-address" placeholder="Email Address" required/>
                    <i className="ri-shield-user-line"></i>
                </div>
                <label htmlFor="password">Password</label>
                <div className="input-field">
                    <input type="password" name='password' onChange={handleInputs} id="password" placeholder="Password" required/>
                    <i className="ri-lock-2-line pass-icon"></i>
                </div>
                <i className="ri-eye-off-fill hide-icon"></i>
                <label htmlFor="upload" className="up-label" id='if'>If you doctor, upload certificate</label>
                <div className="input-field upload-d">
                    <input type="file" id="upload" name='file' onChange={handleInputs} placeholder="upload File..." required/>
                    <label htmlFor="upload">Upload File</label>
                    <i className="ri-links-line up-link"></i>
                </div>

            </div>
            <div className="col-2 cols">
                <label htmlFor="l-name">Last Name</label>
                <div className="input-field">
                    <input type="text" name='Last Name' onChange={handleInputs} id="l-name" placeholder="Last Name" required/>
                    <i className="ri-user-line email-icon"></i>
                </div>
                <label htmlFor="address">Address</label>
                <div className="input-field">
                    <input type="text" id="address" name='address' onChange={handleInputs} placeholder="Your Address" required/>
                    <i className="ri-home-4-line"></i>
                </div>
                <label htmlFor="password">Confirm Password</label>
                <div className="input-field">
                    <input type="password" id="password" name='Confirm Password' onChange={handleInputs} placeholder="Confirm Password" required/>
                    <i className="ri-lock-2-line pass-icon"></i>
                </div>
                <i className="ri-eye-off-fill hide-icon"></i>

                <label htmlFor="age" className="age" id='age-label'>Age</label>
                <div className="input-field">
                    <input type="text" id="age" placeholder="Age" name='age' onChange={handleInputs} required/>
                    <i className="ri-user-line email-icon"></i>
                </div>

            </div>
            
            <div className="radios">
                <p>Are You:</p>
                <div>
                    <input type="radio" id="admin" name="fav" onChange={handleInputs} value="Admin"/>
                    <label htmlFor="admin">Admin</label>
                </div>
                <div>
                    <input type="radio" id="doctor" name="fav" onChange={handleInputs}  value="Doctor"/>
                    <label htmlFor="doctor">Doctor</label>
                </div>
                <div>
                    <input type="radio" id="User" name="fav" onChange={handleInputs}  value="User"/>
                    <label htmlFor="User">User</label>

                </div>
            </div>
        </div>
        <div className="register-field" style={{ width:"50%", margin:"0 25%" }}>
            <input type="submit" value="Register" className="register" onClick={handleSignup}/>
        </div>
        <div className="last-p">Already registered? <Link to={'/login'}>Log In.</Link></div>
    </div>
  )
}

export default Signup