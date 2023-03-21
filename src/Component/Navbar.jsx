import React from 'react';
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom';
import '../Css/ListStyle.css';
import {Component} from 'react';
import { MenuItems } from './MenuItems';

class Navbar extends Component{
    state = {clicked:false};
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <img src={logo} alt="logo" className="logo"/>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                
                <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                             <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                     )
                    })}
                    <Link to="/login">
                         <button>LOGIN</button>
                    </Link>
                </ul>
            </nav>
      
    );
}
}
export default Navbar;