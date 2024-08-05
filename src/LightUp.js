import react from 'react';
import {Link} from 'react-router-dom';
import MainCard from './MainCard';
import music from './insects.mp3'

const LightUp=()=>{

   

    return(
        <div style={{backgroundColor:'black' , height:'650px' , width:'1320px'} }>
            <div style={{height:'300px' , width:'500px' , paddingTop:'200px'}}>
                
                <h1 className='x'>It's TOOO Dark here</h1>
                
            </div>
            <embed name='good' src={music} loop='true' hidden='true' autostart='true'></embed>
            <div>
           <Link to="/BirthDayWish" > <button style={{color:'white',backgroundColor:'blue', height:'30px' , widht:'50px' }}>Switch on the Light</button></Link>
           </div>
        </div>
    )
}

export default LightUp;