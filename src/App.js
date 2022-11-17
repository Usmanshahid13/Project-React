import './App.css'; 
import Navbar from "./Components/Navbar";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {Abouts} from "./Components/Abouts";
import Pic from "./Img/1.png"
// import Pic from "../Img/1.png";  

function App() {
 
 
  return (
   
   <>
  <Navbar/>
   <Home/>
   <About/>
   <div style={{display:"flex"}}>
   <Abouts Pics={secondimg.img} />
   <Abouts Pics={firstimg.img}/>
   <Abouts/>
   </div>
   

</>
  );

}
const firstimg={
  img: <img src={Pic} /> 
};
const secondimg={
  img: >
};
export default App;
