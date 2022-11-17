import './App.css'; 
import Navbar from "./Components/Navbar";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {Abouts} from "./Components/Abouts";
import Pic from "./Img/1.png"
import Scnd from "./Img/2.png"
import Third from "./Img/3.png"
import { Features } from './Components/Features';
// import Pic from "../Img/1.png";  
import Five from "./Img/5.svg"
import { Screenshot } from './Components/Screenshot';

function App() {
 
 
  return (



   
   <>
  <Navbar/>
   <Home/>
   <About/>
   <div className='About' >
   <div style={{width:"30%", margin:"auto", backgroundColor:"wheat",height:"300px"}}>
   <Abouts Pics={secondimg.img} />
   </div>
   <div style={{width:"30%", margin:"auto",backgroundColor:"wheat",height:"300px"}}>
   <Abouts Pics={firstimg.img}/>
   </div>
   <div style={{width:"30%", margin:"auto",backgroundColor:"wheat",height:"300px"}}>
   <Abouts Pics={thirdimg.img}/>
   </div>
   </div>
   <div>
    <Features Pic={fifthimg.img}/>
 
   </div>
   <div>
    <Screenshot/>
   </div>
   

</>
  );

}
const firstimg={
  img: <img  src = {Scnd}/> 
};
const secondimg={
  img: <img style={{height:"70px"}} src={Pic}/>
};
const thirdimg={
  img: <img src={Third}/>
};
const fifthimg={
  img: <img src={Five}/>
}
export default App;
