import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../Css/Registercss.css";
import Registerimg from "../Images/Register.png";
import logo from '../Images/logo.png';

export const Register  = () =>{
    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const [address,setAddress] =useState('');
    const [phone,setPhone] =useState('');
    const [user,setUser]=useState('');

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <div className='register'>
            <div className='headdd'>
            <Link to="/">
            <img src={logo} alt="logo" className="logo"/>
            </Link>   
            <div className='topr'>
            <a>Already have an account? </a>
                <Link to="/login">
                    <button id="butto1">LOGIN</button>
                </Link>
            </div>
        </div>
        <div className="sign">
            <a>Sign Up</a>
        </div>
            <div className="mid">
                <form id="reg" onSubmit ={handleSubmit}>
                    <label id="name" htmlFor="name">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="Full Name" id="name"/>
                    <label id="emaill" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                    <label id="pass" htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/> 
                    <label id="address" htmlFor="address">Address</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="address" placeholder="address"/>
                    <label id="phone" htmlFor="phone">Phone Number</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" placeholder="phone"/>
                    <label id="user" htmlFor="user">User Type:</label> 
                    <select name={user} onChange={(e) => setUser(e.target.value)}  id="user" placeholder='user'>
                        <option value="farmer">Farmer</option>
                        <option value="seller">Seller</option>
                    </select>
                    <button id="butto2" type='submit'>Register</button>
                    
                
                </form>
            </div>
        </div>
        <div className='backg'>
                <img alt="registerimg" src={Registerimg}/>
        </div>    
        </>
    )
}
export default Register;