import "./workshopHeader.css"
import React from "react"
import { useNavigate } from "react-router-dom"

const EventsHeader = () => {


 
    const navigate = useNavigate()



    const handleManageEvents = () => {
      navigate("/manageeventspage");
    }

return (
  <div className="workshopHeader">
      <div className="workshopHeaderContainer" >
      <div className="titleContainer">
      <div className="leftTitle">
      <h1 className="headerTitle">Events</h1>
      <p className="headerDescription">
      Sign up to join bonding activities and make new friends!
      </p>
      </div>

      <div className="rightBtn">
      <button className="headerSecondaryBtn" onClick={handleManageEvents}>Manage Events</button>
      </div>
      </div>

      </div>
  </div>
)
}

export default EventsHeader