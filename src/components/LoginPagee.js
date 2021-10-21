import React from 'react';

import hcbgImage from '../../src/image/backgroundImage.png';
import logoimage from '../image/logo.png';

import './LoginPage.css';

const LoginPage = props => {
    const addUserHandler = (event) =>{
        event.preventDefault();
    };
 
    return (
       <div class='wrapper'>
        <div className='main-image'>
            <img src={hcbgImage} alt='sampleimage' />
        </div> 
           
        <div>
            <div className='div-login'>
                <div className='logo'> 
                <img src={logoimage} alt='sampleLogo' />
                </div>
           
        <form onSubmit={addUserHandler}>
            <div className='field'>
            <label for="email">Email</label><br/>
            <input  type="email" name="email"  placeholder="Enter your email" /><br/>
            </div>
            <div className='field2'>
            <label for="password">Password</label><br/>
            <input type="password" name="password" placeholder="Enter your password" /> <br/>
            </div>
            <p> Forgot password?
            <a  href="#">Reset</a></p>
            <br />
            <div>
            <button type="submit" >SIGN IN</button>
            </div>
        </form>
        </div>
       </div>
       </div>  
    );
}

export default LoginPage;