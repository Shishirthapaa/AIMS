import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../Css/Registercss.css";
import Registerimg from "../Images/Register.png";

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
        <div className='topr'>
        <a>Already have an account? </a>
            <Link to="/login">
                <button id="butto1">LOGIN</button>
            </Link>
        </div>
       


        <form id="reg" onSubmit ={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" placeholder="Full Name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/> 
            <label htmlFor="address">Address</label>
            <input value={address} type='address' name="address" placeholder="address"/>
            <label htmlFor="phone">Phone Number</label>
            <input value={phone} type='number' name="phone" placeholder="phone"/>
            <label htmlFor="user">User Type:</label> 
            <select name={user} id="user"placeholder='user'>
                <option value="farmer">Farmer</option>
                <option value="seller">Seller</option>
            </select>
            <button id="butto2" type='submit'> Register</button>
             
        
        </form>
        </div>
        <div className='backg'>
                <img alt="registerimg" src={Registerimg}/>
        </div>    
        </>
    )
}
export default Register;