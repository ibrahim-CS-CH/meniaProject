import React from 'react'
const ChangePasswd = () => {
  return (
    <div class="login">
        <nav>
            <i class="ri-arrow-left-line"></i>
            <a href="#">
                <img src="logo.png" alt="Logo"/>
            </a>
            <p>MPXV</p>
        </nav>
        <div class="container">
            <div class="log-text">
                <h1>Change Password</h1>
            </div>
            <div class="container-2">
                <div class="l-log">
                    <label htmlFor="Password">Password
                    </label>
                    <div class="input-field">
                        <input type="Password" id="Password" placeholder="Password" required/>
                        <i class="ri-lock-2-line pass-icon"></i>
                        <i class="ri-eye-off-fill hide-icon-2"></i>
                    </div>
                    <label htmlFor="password">Confirm Password</label>
                    <div class="input-field">
                        <input type="password" id="password" placeholder="Confirm Password" required/>
                        <i class="ri-lock-2-line pass-icon"></i>
                    </div>

                    <i class="ri-eye-off-fill hide-icon"></i>

                    <div class="input-field">
                        <input type="submit" value="Confirm New Password" class="input-login"/>
                    </div>
                </div>
                {/* <div class="r-log">
                    <img src="WhatsApp Image .png" alt="LOGO"/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ChangePasswd