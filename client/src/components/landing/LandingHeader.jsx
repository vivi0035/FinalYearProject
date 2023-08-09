import "./landingHeader.css"
import React from "react"
import { useNavigate } from "react-router-dom"

const LandingHeader = () => {


 
    const navigate = useNavigate()



    const handleManageEvents = () => {
      navigate("/login");
    }

return (
  <div className="workshopHeader">
      <div className="workshopHeaderContainer" >
      <div className="titleContainer">
      <div className="leftTitle">
      <h1 className="headerTitle">LEARNING IS A LIFELONG PROCESS</h1>
      <p className="headerDescription" style={{width:"500px"}}>
      Stay up to date on the latest in-demand skills and find like-minded people to learn alongside with. </p>
      </div>

      <div className="rightBtn">
      <button className="headerSecondaryBtn" onClick={handleManageEvents}>Start Learning</button>
      </div>
      </div>

      </div>
  </div>
)
}

export default LandingHeader