import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    //inputs have the email and passwd of login you can handle it in handle login if you need it 
    const handleInputs = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs((e)=>({...e, [name]:value}))
    }
    // console.log(inputs);
    const handleLogin = (e)=>{
        e.preventDefault();
        //we have some validation in these step that we will sure that email in like example@example.com
        // we will send request here to make sure that email and passwd true
        //then go to homeUser or homeDoc
        navigate("/home")
    }
  return (
    <div className="login">
        <nav>
            <i className="ri-arrow-left-line"></i>
            <Link href="#" to={'/'}>
                <img src="logo.png" alt="Logo"/>
            </Link>
            <p>MPXV</p>
        </nav>
        <div className="container">
            <div className="log-text">
                <h1>Login</h1>
            </div>
            <div className="container-2">
                <form className="l-log">
                    <label htmlFor="e-address">Email Address</label>
                    <div className="input-field">
                        <input type="email"name='email' id="e-address" placeholder="Email Address" required onChange={handleInputs}/>
                        <i className="ri-user-line email-icon"></i>
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className="input-field">
                        <input type="password"name="password" id="password" placeholder="Password" required onChange={handleInputs}/>
                        <i className="ri-lock-2-line pass-icon"></i>
                    </div>
                    {/* <a href="#" className="forget">Forget Password?</a> */}

                    <i className="ri-eye-off-fill hide-icon"></i>

                    <div className="input-field">
                        <input type="submit" value="Login" onClick={handleLogin} className="input-login"/>
                    </div>
                    <p className="reg">Already registered? <Link to={'/register'}>Create Account</Link></p>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login