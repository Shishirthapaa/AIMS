import React,{useState} from 'react';
import"../Css/Forgotpw.css";
import Loginimg from '../Images/Loginimg.png';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Forgotpw=()=>{
    const [email,setEmail] =useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
        
        <div className="forgotpw">
        <div className='head'>
        <Link to="/">
        <img src={logo} alt="logo" className="logo"/>
        </Link>
            <div className='topp'>
                <a>Don't have an account?</a>
                <Link to="/register">
                    <button id="button1">Register</button>
                </Link>
            </div>
        </div>  
            <a id='forgot'>Forgot Password?</a>

            <div className='midd'>
            <form onSubmit={handleSubmit}>
                    <label id="fpw" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="ema" name="email"/>
            </form>
            </div>
            <button id="button5">Submit</button>
        </div>
        <div className='backgrd'>
            <img alt="loginimg" src={Loginimg}/>
        </div>
        
        </>
    )
}

export default Forgotpw;