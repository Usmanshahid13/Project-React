import React from 'react';
import  S1 from './Img/ss1.png'; 
import  S2 from './Img/ss2.png'
import  S3 from './Img/ss3.png'
import  S4 from './Img/ss4.png'
import  S5 from './Img/ss5.png'
import  S6 from './Img/ss6.png'

export const Screenshot = () => {

  return (
    <div>
        <div style={{display:"flex"}}>
          <div className='s1'>  <img id='s1' src={S1}></img>  </div>  
          <div className='s2'>  <img id='s2' src={S2}></img>  </div>
          <div className='s3'>  <img id='s3' src={S3}></img>  </div>
          <div className='s4'> <img id='s4' src={S4}></img>  </div>
          <div className='s5'> <img id='s5' src={S5}></img>  </div>
          <div className='s6'> <img id='s6'  src={S6}></img>  </div>
          </div>
          </div>
  )
}

var img1= document.getElementById("s1");
var img2= document.getElementById("s2");
var img3= document.getElementById("s3");
var img4= document.getElementById("s4");
var img5= document.getElementById("s5")
var img6= document.getElementById("s6");



// img1.onclick = function () {
//     img1.style.top = 0 + "px";
//     img1.style.transform = "scale(1.3)";
//     img2.style.transform = "scale(1)";
//     img3.style.transform = "scale(1)";
//     img4.style.transform = "scale(1)";
//     img5.style.transform = "scale(1)";
//     img6.style.transform = "scale(1)";
//     img1.style.transition = "0.4s";     

// }