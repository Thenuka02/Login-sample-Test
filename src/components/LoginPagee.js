import React from 'react';

import hcbgImage from '../../src/image/backgroundImage.png';
import logoimage from '../image/logo.png';

import './LoginPage.css';

const LoginPage = props => {
    const addUserHandler = (event) =>{
        event.preventDefault();
    };
 
    return (
       <div class='main'>
        <div className='main-image'>
            <img src={hcbgImage} alt='sampleimage' />
        </div> 
           
        <div>
            <div className='div-login'>
               
           
        <form className='formSample' onSubmit={addUserHandler}>
        <div className='logo'> 
                <img src={logoimage} alt='sampleLogo' />
                </div>
            <div className='fieldemail'>
            <label for="email">Email</label><br/>
            <input  type="email" name="email"  placeholder="Enter your email" /><br/>
            </div>
            <div className='fieldpwd'>
            <label for="password">Password</label><br/>
            <input type="password" name="password" placeholder="Enter your password" /> <br/>
            </div>
            <div className='link'>
            <p > Forgot password?
            <a  href="#">Reset</a></p>
            <br />
            </div>
            <div className='button'>
            <button type="submit" >SIGN IN</button>
            </div>
        </form>
        </div>
       </div>
       </div>  
    );
}

export default LoginPage;