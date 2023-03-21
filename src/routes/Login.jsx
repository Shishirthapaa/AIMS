import React,{useState} from 'react';
import"../Css/Logincss.css";
import Loginimg from '../Images/Loginimg.png';
import { Link } from 'react-router-dom';


const Login=()=>{
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }


    return(
        <>
        <div className="loginpage">
            <div className='top'>
                <a>Don't have an account?</a>
                <Link to="/register">
                    <button id="button1">Register</button>
                </Link>
            </div>


        <form id="log"onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                        <label htmlFor="password">Password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/> 
                        <button id="button2" type='submit'>Log in</button>
                    </form>
        </div>

         <div className='back'>
                <img alt="loginimg" src={Loginimg}/>
        </div>
            
        
        </>
    )
}
export default Login;