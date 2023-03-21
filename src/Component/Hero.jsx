import React from 'react';
import"../Css/HeroStyles.css";
import bcg from '../Images/bcg.png'
const  Hero=(props)=>{
    return(
        <>
        <div className={props.cName}>
            <img alt='bcg' src={bcg}/>
        </div>
        
        </>
    )
}
export default Hero;