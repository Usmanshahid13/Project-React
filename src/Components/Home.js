import React from 'react';
import ImagePic from '../Img/Mob.png';
import Image from "../Img/img1.svg"
import ImageP from "../Img/img2.svg"
export const Home = () => {
    let homestyle={
        width:"100%",
        display:"flex",
    }
  return (
    <div className='con' style={homestyle}>
    <div style={{width:"40%",marginTop:"150px",marginLeft:"60px"}}>
    <div className='container' ><h1 >Great landing page template for your mobile app!</h1></div>
      <div className='container1' style={{fontSize:"25px",marginLeft:"5px",fontWeight:"10%"}}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.</p></div>
    <div>
        <img src={ Image}/>
       <img style={{marginLeft:"20px"}} src={ImageP}/>
    </div>
    </div>
    <div style={{width:"60%"}}>
        <img style={{width:"700px"}} src={ImagePic}/>
    </div>
    </div>
  )
}
export default Home;
