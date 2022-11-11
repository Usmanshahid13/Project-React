import React from 'react'
// import Pic from "../Img/1.png"

export const Abouts = (props) => {
  return (
    <div>
       <div className="large-container" style={{width :"100%",display:"flex"}}>
      <div style={{width:"30%"}}>
        <div style={{textAlign:"center"}}>
            {props.Pics}
            
            {/* <img src={Pic}/> */}
        </div>
        <div style={{textAlign:"center"}}><h5>Features heading</h5></div>
        <div style={{textAlign:"center"}}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.Curabitur consectetur eu risus at mollis.</p></div>
      </div>

      </div>
    </div>
  )
}
