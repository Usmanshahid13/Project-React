import React from 'react'
// import Pic from "../Img/1.png"

export const Abouts = (props) => {
  return (
    <div>
       <div className="large-container" style={{}}>
      <div>
        <div style={{textAlign:"center",marginTop:"30px"}}>
            {props.Pics}
            
            {/* <img src={Pic}/> */}
        </div>
        <div style={{textAlign:"center", marginTop:"20px"}}><h5>Features heading</h5></div>
        <div style={{textAlign:"center"}}> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.Curabitur consectetur eu risus at mollis.</p></div>
      </div>

      </div>
    </div>
  )
}
