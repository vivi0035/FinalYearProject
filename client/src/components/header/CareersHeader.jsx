import "./workshopHeader.css"
import React from "react"
import { useNavigate } from "react-router-dom"

const CareersHeader = () => {


 
    const navigate = useNavigate()

return (
  <div className="workshopHeader">
      <div className="workshopHeaderContainer" >
      <div className="titleContainer">
      <div className="leftTitle">
      <h1 className="headerTitle">Careers</h1>
      <p className="headerDescription">
      Enhance your resume with LLL@EEE workshops and apply for high demand jobs and internships. 
      </p>
      <p className="headerDescription">
      Contact your Career Coaches for advices and tips on how to ace your interviews <i><u>here</u></i>.
      </p>
      </div>
      
      
      </div>
      

      </div>
  </div>
)
}

export default CareersHeader

