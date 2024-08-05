import react from 'react';
import img from'./MyImg.jpeg';
import img1 from'./Img1.jpeg';
import img2 from'./Img2.jpeg';
import img3 from'./Img3.jpeg';
import img4 from'./Img4.jpeg';
import img5 from'./Img5.jpeg';
import img6 from'./Img6.jpeg';
import img7 from'./Img7.jpeg';
import img8 from'./Img8.jpeg';
import img9 from'./Img9.jpeg';
import img10 from'./Img10.jpeg';
import img11 from'./Img11.jpeg';
import img12 from'./Img12.jpeg';
import img13 from'./Img13.jpeg';
import img14 from'./Img14.jpeg';
import './style.css';
import React, { useState} from 'react';

// const Describe=()=>{
//     const [style, setStyle] = useState("blur");
//     const [sent,setSent]=useState("");

//     const [style2, setStyle2] = useState("blur");
//     const [sent2,setSent2]=useState("");

//     const changeStyle=()=>{
        
//         if (style == "blur") setStyle("clear") ;
//         if(style=="clear") setStyle("blur");
//         if(sent=='') setSent(<h1 className='multicolor-text' style={{fontSize:'20px',marginLeft:'10px'}}>happy birthday swathi</h1>);
//         else setSent("");  
//     }

//     const changeStyle2=()=>{
        
//         if (style2 == "blur") setStyle2("clear") ;
//         if(style2=="clear") setStyle2("blur");
//         if(sent2=='') setSent2(<h1 className='multicolor-text' style={{fontSize:'20px',marginLeft:'10px'}}>happy birthday swathi</h1>);
//         else setSent2("");  
//     }

//     return(
//         <div style={{display:"flex" }}>
//         <div className='card' style={{marginLeft:'50px',display:"flex",marginTop:'40px' , backgroundColor:'skyblue'}} >
//             <img src={img} className={style} onClick={changeStyle} style={{borderRadius:'50%'}}></img>
//             <h1 className='y' style={{fontSize:'30px',marginLeft:'10px'}}>{sent}</h1>
            
//         </div>
//         <div className='card' style={{marginLeft:'50px',display:"flex",marginTop:'40px' , backgroundColor:'blue'}} >
//             <img src={img} className={style2} onClick={changeStyle2} style={{borderRadius:'50%'}}></img>
//             <h1 className='y' style={{fontSize:'30px',marginLeft:'10px'}}>{sent2}</h1>
            
//         </div>
//         </div>
       
//     )
// }

const Describe=()=>{
    let data=[
        {id:1,
            imgSrc:img1,
        },
        {id:2,
            imgSrc:img2,
        },
        {id:3,
            imgSrc:img3,
        },
        {id:4,
            imgSrc:img4,
        },
        // {id:5,
        //     imgSrc:img5,
        // },
        {id:6,
            imgSrc:img6,
        },
        {id:7,
            imgSrc:img7,
        },
        // {id:8,
        //     imgSrc:img8,
        // },
        {id:9,
            imgSrc:img9,
        },
        {id:10,
            imgSrc:img10,
        },
        {id:11,
            imgSrc:img11,
        },
        {id:12,
            imgSrc:img12,
        },
        {id:13,
            imgSrc:img13,
        },
        {id:14,
            imgSrc:img14,
        }
    ]


return(<>
    <div className='gallery' >
        {data.map((item,index)=>{
                return(
                    <div className='pics' key={index}>
                    <img src={item.imgSrc} style={{width:'100%'}}></img>
                    </div>
                )
               
        })}
    </div>
    </>
)
}


export default Describe;