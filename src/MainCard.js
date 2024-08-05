import react from 'react';
import './style.css';
import Swathi from './Swathi.jpeg';
import img from'./s.jpg';
import React, { useState, useEffect, Component , render } from 'react';
import ChangingTextComponent from './ChangingTextComponent';
import Confetti from 'react-confetti';
import {Link} from 'react-router-dom';



const MainCard=()=>{
    const myStyle = {
        backgroundImage:
            "url('https://getwallpapers.com/wallpaper/full/7/8/e/282191.jpg')",
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
      

return(
    <div style={{ height:'650px' , width:'1320px'  , display:'flex'}}>
        <div style={{BackgroundColor:'red' , height:'300px' , width:'300px', margin:'100px',marginLeft:'200px'}}>
           <img src={Swathi} style={{width:'300px' ,height:'300px' ,borderRadius:'50%'}}></img>

        </div>
        <div style={{BackgroundColor:'red' , height:'300px' , width:'300px' , marginTop:'50px'}}>
          
        <p className='y'><Confetti/><ChangingTextComponent/></p>
        </div>
        <div>
        <Link to="/Describe" > <button style={{color:'white',backgroundColor:'#7d0704', height:'35px' , widht:'50px' ,marginTop:'500px'}}>Pics chusthava?????</button></Link>
        </div>
        
    </div>
)
}

export default MainCard;