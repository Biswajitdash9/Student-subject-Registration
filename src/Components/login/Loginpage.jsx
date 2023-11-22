import React from 'react'
import './loginpage.css';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
function Loginpage() {
    return (
        <div className="container">
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" width="20px" height="20px" />
                    <input type="email" placeholder="Email id" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" width="20px" height="20px" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="submit_container">
                <button className="submit">Login</button>
            </div>
        </div>
    )
}

export default Loginpage
